import { useState, useEffect } from 'react';

export const useGithubProjects = (username) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                setLoading(true);
                // Fetching top 6 repositories sorted by updated date
                const response = await fetch(
                    `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }

                const data = await response.json();

                // Transform GitHub data to match our project structure
                const transformedRepos = data.map(repo => ({
                    title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
                    description: repo.description || 'No description available.',
                    techStack: repo.language ? [repo.language] : ['GitHub'],
                    github: repo.html_url,
                    demo: repo.homepage || '',
                    stars: repo.stargazers_count,
                    forks: repo.forks_count,
                    updatedAt: repo.updated_at
                }));

                setRepos(transformedRepos);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (username) {
            fetchRepos();
        }
    }, [username]);

    return { repos, loading, error };
};
