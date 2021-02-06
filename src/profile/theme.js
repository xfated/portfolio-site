export const Theme = {
    block: getComputedStyle(document.documentElement).getPropertyValue("--block"),
    background: getComputedStyle(document.documentElement).getPropertyValue("--background"),
    highlight: getComputedStyle(document.documentElement).getPropertyValue("--highlight"),
    header: getComputedStyle(document.documentElement).getPropertyValue("--header"),
    muted: getComputedStyle(document.documentElement).getPropertyValue("--muted"),
    text: getComputedStyle(document.documentElement).getPropertyValue("--text")
}