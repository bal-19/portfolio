import { writeFileSync } from 'fs'

const USERNAME = 'bal-19'
const TOKEN = process.env.GH_STATS_TOKEN

const query = `
  query($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`

const res = await fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ query, variables: { login: USERNAME } }),
})

const json = await res.json()
const weeks = json.data.user.contributionsCollection.contributionCalendar.weeks

// Flatten + hitung level pakai kuartil
const days = weeks.flatMap((w) => w.contributionDays)
const counts = days.map((d) => d.contributionCount).filter((c) => c > 0)
const sorted = [...counts].sort((a, b) => a - b)
const q = (p) => sorted[Math.floor(sorted.length * p)] || 0
const [q1, q2, q3] = [q(0.25), q(0.5), q(0.75)]

function levelOf(count) {
  if (count === 0) return 0
  if (count <= q1) return 1
  if (count <= q2) return 2
  if (count <= q3) return 3
  return 4
}

const result = days.map((d) => ({
  date: d.date,
  count: d.contributionCount,
  level: levelOf(d.contributionCount),
}))

writeFileSync('src/data/stats.json', JSON.stringify(result, null, 2))
console.log(`Saved ${result.length} days to src/data/stats.json`)
