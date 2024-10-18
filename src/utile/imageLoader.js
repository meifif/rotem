export async function getImages(serviceName) {
    let images = [];
    try {
        const context = await import(`../img/${serviceName}`);
        console.log({context});
        images = Object.values(context).filter(module => module.default);
        console.log({images});
        return images.map(module => module.default);
    } catch (error) {
        console.error(`Error loading images for  ${serviceName}:`, error);
        return [];
    }
}