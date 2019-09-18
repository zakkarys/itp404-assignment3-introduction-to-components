export async function getReddits(organization) {
	let response = await fetch(`https://www.reddit.com/r/${organization}/.json`);
    let results = await response.json();
    return results; 
}