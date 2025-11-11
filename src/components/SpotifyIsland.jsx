import React, { useEffect, useState } from "react";
import LiveIsland from "react-live-island";
import CountUp from "@/components/lib/CountUp";
import { FaSpotify } from "react-icons/fa"

export default function SpotifyIslandNowPlaying() {
    const [track, setTrack] = useState(null);
    const [token, setToken] = useState(null);
    const [progressMs, setProgressMs] = useState(0);
    const [durationMs, setDurationMs] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [time, setTime] = useState({
        hour: 0,
        minute: 0,
        second: 0,
    });
    const [showTime, setShowTime] = useState(true);

    const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
    const REFRESH_TOKEN = import.meta.env.VITE_SPOTIFY_CLIENT_REFRESH_TOKEN;

    // ambil access token dari refresh token
    const refreshAccessToken = async () => {
        const cachedToken = localStorage.getItem("spotify_token");
        const cachedExpiry = localStorage.getItem("spotify_token_expiry");

        // Cek apakah token masih valid
        if (cachedToken && cachedExpiry && Date.now() < Number(cachedExpiry)) {
            setToken(cachedToken);
            return;
        }

        try {
            const res = await fetch("https://accounts.spotify.com/api/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization: "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
                },
                body: new URLSearchParams({
                    grant_type: "refresh_token",
                    refresh_token: REFRESH_TOKEN,
                }),
            });

            const data = await res.json();
            const expiresAt = Date.now() + data.expires_in * 1000; // waktu kedaluwarsa token

            localStorage.setItem("spotify_token", data.access_token);
            localStorage.setItem("spotify_token_expiry", expiresAt.toString());

            setToken(data.access_token);
        } catch (err) {
            console.error("Gagal refresh token:", err);
        }
    };

    useEffect(() => {
        refreshAccessToken();
    }, []);

    // ambil lagu yang sedang dimainkan
    const fetchNowPlaying = async () => {
        if (!token) return;
        try {
            const res = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (res.status === 204) {
                setTrack(null);
                return;
            }

            const data = await res.json();
            if (data?.item) {
                setTrack({
                    title: data.item.name,
                    artist: data.item.artists.map((a) => a.name).join(", "),
                    albumArt: data.item.album.images[0]?.url,
                });
                setProgressMs(data.progress_ms);
                setDurationMs(data.item.duration_ms);
                setIsPlaying(data.is_playing);
            }
        } catch (err) {
            console.error("Gagal ambil lagu:", err);
        }
    };

    useEffect(() => {
        if (!token) return;

        let timeoutId;
        const loop = async () => {
            await fetchNowPlaying();
            timeoutId = setTimeout(loop, 30_000);
        };
        loop();

        return () => clearTimeout(timeoutId);
    }, [token]);


    // progress bar berjalan
    useEffect(() => {
        if (!isPlaying) return;
        const interval = setInterval(() => {
            setProgressMs((p) => (p + 1000 <= durationMs ? p + 1000 : durationMs));
        }, 1000);
        return () => clearInterval(interval);
    }, [isPlaying, durationMs]);

    const progressPercent = durationMs ? (progressMs / durationMs) * 100 : 0;

    // Waktu real-time (untuk tampilan kecil)
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime({
                hour: now.getHours(),
                minute: now.getMinutes(),
                second: now.getSeconds(),
            });
        };

        updateTime(); // initial
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Ganti antara jam dan current song (hanya kalau ada track)
    useEffect(() => {
        if (!track) return; // kalau tidak ada lagu, tetap jam
        const toggle = setInterval(() => {
            setShowTime((prev) => !prev);
        }, 5000);
        return () => clearInterval(toggle);
    }, [track]);

    return (
        <LiveIsland
            smallClassName="text-xs"
            largeClassName="text-7xl"
            largeHeight={100}
            smallHeight={42}
            smallWidth={160}
            initialAnimation
            className="flex w-full"
        >
            {(isSmall) =>
                isSmall ? (
                    // Tampilan kecil
                    <div className="relative flex items-center justify-center w-full h-full overflow-hidden select-none px-2">
                        {/* Jam */}
                        <div
                            className={`absolute inset-0 flex items-center justify-center gap-1 transition-opacity duration-700 ${showTime || !track ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <div className="flex items-center justify-center gap-1 text-lg text-white">
                                <CountUp
                                    to={time.hour}
                                    direction="up"
                                    duration={0.5}
                                    prefix={time.hour < 10 ? "0" : ""}
                                />
                                <span>:</span>
                                <CountUp
                                    to={time.minute}
                                    direction="up"
                                    duration={0.5}
                                    prefix={time.minute < 10 ? "0" : ""}
                                />
                                <span>:</span>
                                <CountUp
                                    to={time.second}
                                    direction="up"
                                    duration={0.5}
                                    prefix={time.second < 10 ? "0" : ""}
                                />
                            </div>

                        </div>

                        {/* Lagu */}
                        {track && (
                            <div
                                className={`absolute inset-0 flex items-center justify-center gap-1 transition-opacity duration-700 ${showTime ? "opacity-0" : "opacity-100"
                                    }`}
                            >
                                <FaSpotify className="w-5 h-5 text-green-500" />
                                <p className="text-lg font-medium text-white truncate max-w-[90px]">
                                    {track.title}
                                </p>
                            </div>
                        )}
                    </div>
                ) : track ? (
                    // Tampilan besar (full width)
                    <div className="flex flex-col w-full px-5 py-4">
                        <div className="flex items-center w-full gap-4">
                            <img
                                src={track.albumArt}
                                alt="Album"
                                className="w-18 h-18 rounded-xl shadow-md object-cover flex-shrink-0 transition-all duration-700 ease-in-out transform hover:scale-105"
                            />
                            <div className="flex flex-col w-full overflow-hidden">
                                <p className="font-semibold text-lg truncate">{track.title}</p>
                                <p className="text-gray-400 text-sm truncate">
                                    {track.artist}
                                </p>

                                {/* Progress bar */}
                                <div className="mt-3 w-full h-1.5 bg-gray-700/60 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-green-500 rounded-full transition-all duration-500"
                                        style={{ width: `${progressPercent}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center items-center h-full py-4 w-full">
                        <p className="px-4 py-1.5 text-sm font-medium text-gray-300 bg-gray-800/60 border border-gray-700 rounded-full">
                            No songs are playing 🎧
                        </p>
                    </div>
                )
            }
        </LiveIsland>
    );
}
