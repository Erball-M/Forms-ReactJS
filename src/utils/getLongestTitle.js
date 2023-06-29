export const getLongestTitle = (options) => {
    const labels = options.map(item => item.title)
    labels.sort((a, b) => b.length - a.length)
    return labels[0]
}