export function urlencoded(data: { [key: string]: string }) {
    return Object.entries(data).map(([key, value]) =>
	encodeURIComponent(key) + "=" + encodeURIComponent(value)    ).join("&");
}
