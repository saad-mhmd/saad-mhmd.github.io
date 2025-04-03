import React, { useState, useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";

const GitHubStats = () => {
    // State Management (useState)
    const [userData, setUserData] = useState(null); // To store fetched GitHub profile data
    const [loading, setLoading] = useState(true); // To track API request status
    const [error, setError] = useState(null); // To store potential error messages

    // Data Fetching (useEffect)
    useEffect(() => {
        const fetchGitHubData = async () => {
            const username = "saad-mhmd";
            const apiUrl = `https://api.github.com/users/${username}`;

            // Reset states before fetching
            setLoading(true);
            setError(null);
            setUserData(null); // Clears old data immediately (Optional)

            try {
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    // Handle HTTP errors
                    throw new Error(
                        `GitHub API error: ${response.status} ${response.statusText}`
                    );
                }

                const data = await response.json();
                setUserData(data); // Update state with fetched data
            } catch (err) {
                console.error("Error fetching GitHub data:", err); // (debugging)
                // Set a user-friendly error message
                if (err instanceof Error) {
                    setError(`Failed to fetch data: ${err.message}`);
                } else {
                    setError("An unknown error occurred while fetching GitHub data.");
                }
            } finally {
                setLoading(false); // Set loading to false in both cases
            }
        };

        fetchGitHubData();
    }, []); // Empty dependency array ==> runs only once on mount

    return (
        <div
            id="github-stats"
            className="w-full bg-gray-900/80 text-white p-8 mt-20 backdrop-blur-sm min-h-[200px] flex items-center justify-center"
        >
            <div className="max-w-4xl mx-auto text-center w-full">
                <h2 className="text-3xl font-orbitron mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    My GitHub Profile
                </h2>

                {/* Conditional Rendering Block */}
                {loading && (
                    <p className="text-lg text-gray-400 animate-pulse">
                        Loading GitHub stats...
                    </p>
                )}

                {error && (
                    <div className="bg-red-900/50 border border-red-700 p-4 rounded-lg max-w-md mx-auto">
                        <p className="text-lg text-red-300 font-semibold">
                            Error fetching stats
                        </p>
                        <p className="text-red-400 text-sm mt-1">{error}</p>
                    </div>
                )}

                {!loading && !error && userData && (
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-left">
                        {" "}
                        {/* Changed to text-left for content */}
                        {/* Avatar */}
                        <a
                            href={userData.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 group"
                        >
                            <img
                                src={userData.avatar_url}
                                alt={`${userData.login}'s avatar`}
                                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-transparent group-hover:border-cyan-400 transition-colors duration-300 shadow-lg"
                            />
                        </a>
                        {/* Info & Stats */}
                        <div className="flex flex-col gap-3 items-center sm:items-start">
                            {/* Name & Link */}
                            <a
                                href={userData.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2"
                            >
                                <h3 className="text-2xl font-semibold font-orbitron text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300">
                                    {userData.login} {/* Display login */}
                                </h3>
                                <FiExternalLink className="text-cyan-400 group-hover:text-cyan-200 transition-colors duration-300 opacity-70 group-hover:opacity-100" />
                            </a>
                            {/* Bio */}
                            {userData.bio && (
                                <p className="text-gray-300 max-w-md text-center sm:text-left">
                                    {userData.bio}
                                </p>
                            )}

                            {/* Stats Row */}
                            <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-2 text-sm">
                                <div className="flex flex-col items-center px-3 py-1 bg-gray-800/50 rounded-md border border-gray-700">
                                    <span className="font-bold text-lg text-purple-300">
                                        {userData.public_repos}
                                    </span>
                                    <span className="text-gray-400">Repositories</span>
                                </div>
                                <div className="flex flex-col items-center px-3 py-1 bg-gray-800/50 rounded-md border border-gray-700">
                                    <span className="font-bold text-lg text-purple-300">
                                        {userData.followers}
                                    </span>
                                    <span className="text-gray-400">Followers</span>
                                </div>
                                <div className="flex flex-col items-center px-3 py-1 bg-gray-800/50 rounded-md border border-gray-700">
                                    <span className="font-bold text-lg text-purple-300">
                                        {userData.following}
                                    </span>
                                    <span className="text-gray-400">Following</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    // End Data Display
                )}

                {!loading && !error && !userData && (
                    // Fallback case: Should ideally not happen if API call is made
                    <p className="text-lg text-gray-500">Could not load GitHub data.</p>
                )}
                {/* End Conditional Rendering Block */}
            </div>
        </div>
    );
};

export default GitHubStats;
