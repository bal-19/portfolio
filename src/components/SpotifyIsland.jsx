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
            const expiresAt = Date.now() + data.expires_in * 1000;

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

    // Waktu real-time
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime({
                hour: now.getHours(),
                minute: now.getMinutes(),
                second: now.getSeconds(),
            });
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Toggle antara jam dan current song
    useEffect(() => {
        if (!track) return;
        const toggle = setInterval(() => {
            setShowTime((prev) => !prev);
        }, 5000);
        return () => clearInterval(toggle);
    }, [track]);

    return (
        <LiveIsland
            smallClassName="text-xs"
            largeClassName="text-7xl"
            largeHeight={130}
            smallHeight={38}
            smallWidth={170}
            initialAnimation
            className="flex w-full"
        >
            {(isSmall) =>
                isSmall ? (
                    // Tampilan kecil - iOS style
                    <div className="relative flex items-center justify-center w-full h-full overflow-hidden select-none px-3 backdrop-blur-2xl bg-black/80 rounded-full shadow-lg">
                        {/* Jam */}
                        <div
                            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${showTime || !track ? "opacity-100 scale-100" : "opacity-0 scale-95"
                                }`}
                        >
                            <div className="flex items-center gap-0.5 text-base font-semibold text-white tracking-tight">
                                <CountUp
                                    to={time.hour}
                                    direction="up"
                                    duration={0.3}
                                    prefix={time.hour < 10 ? "0" : ""}
                                />
                                <span className="animate-pulse">:</span>
                                <CountUp
                                    to={time.minute}
                                    direction="up"
                                    duration={0.3}
                                    prefix={time.minute < 10 ? "0" : ""}
                                />
                            </div>
                        </div>

                        {/* Lagu */}
                        {track && (
                            <div
                                className={`absolute inset-0 flex items-center justify-center gap-2 px-3 transition-all duration-500 ${showTime ? "opacity-0 scale-95" : "opacity-100 scale-100"
                                    }`}
                            >
                                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20">
                                    <FaSpotify className="w-4.5 h-4.5 text-green-500" />
                                </div>
                                <div className="flex items-center gap-1 flex-1 min-w-0">
                                    <div className="flex flex-col gap-0.5 w-4 justify-center">
                                        <div className="w-1 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0ms', animationDuration: '800ms' }}></div>
                                        <div className="w-1 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '150ms', animationDuration: '800ms' }}></div>
                                        <div className="w-1 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '300ms', animationDuration: '800ms' }}></div>
                                    </div>
                                    <p className="text-base font-medium text-white truncate">
                                        {track.title}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                ) : track ? (
                    // Tampilan besar - iOS style dengan blur
                    <div className="flex flex-col w-full h-full backdrop-blur-3xl bg-black/70 rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/10">
                        {/* Background gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>

                        <div className="relative flex items-center w-full gap-4 px-6 py-5">
                            {/* Album art dengan shadow yang lebih dalam */}
                            <div className="relative flex-shrink-0">
                                <div className="absolute inset-0 bg-green-500/20 rounded-2xl blur-xl"></div>
                                <img
                                    src={track.albumArt}
                                    alt="Album"
                                    className="relative w-20 h-20 rounded-2xl shadow-2xl object-cover transition-all duration-500 ease-out transform hover:scale-105"
                                />
                            </div>

                            {/* Track info */}
                            <div className="flex flex-col flex-1 min-w-0 gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 backdrop-blur-sm">
                                        <FaSpotify className="w-4 h-4 text-green-500" />
                                    </div>
                                    <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">
                                        Now Playing
                                    </span>
                                </div>

                                <div>
                                    <p className="font-bold text-lg text-white truncate mb-0.5 leading-tight">
                                        {track.title}
                                    </p>
                                    <p className="text-sm text-gray-300/80 truncate font-medium">
                                        {track.artist}
                                    </p>
                                </div>

                                {/* Progress bar dengan styling iOS */}
                                <div className="flex items-center gap-3 mt-1">
                                    <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                                        <div
                                            className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-300 ease-linear shadow-lg shadow-green-500/30"
                                            style={{ width: `${progressPercent}%` }}
                                        />
                                    </div>
                                    {isPlaying && (
                                        <div className="flex items-center gap-0.5">
                                            <div className="w-0.5 h-2.5 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0ms', animationDuration: '800ms' }}></div>
                                            <div className="w-0.5 h-3.5 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '150ms', animationDuration: '800ms' }}></div>
                                            <div className="w-0.5 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '300ms', animationDuration: '800ms' }}></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    // No song playing - iOS style
                    <div className="flex justify-center items-center h-full w-full backdrop-blur-3xl bg-black/70 rounded-[2.5rem] shadow-2xl border border-white/10">
                        <div className="flex items-center gap-2 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                            <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                            <p className="text-sm font-medium text-gray-300">
                                No songs playing
                            </p>
                        </div>
                    </div>
                )
            }
        </LiveIsland>
    );
}