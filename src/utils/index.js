export const slugify = (name) => {
	return name
		.toLowerCase()
		.replace(/[^a-zA-Z' ']/g, "")
		.split(" ")
		.join("-");
};
