export const convertYear = (yearString: string) => {
    const year = new Date(yearString).getFullYear();
    return year;
};
