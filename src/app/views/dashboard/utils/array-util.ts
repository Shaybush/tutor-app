export const arrayClassHebrew = (id: number): string => {
    const classes = ["", "א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ", "ק", "ר", "ש", "ת"]
    return classes[id]
}

export const arrayClassEnglish = (id: number): string => {
    const classes = Array.from(Array(26)).
        map((e, i) => i + 65)
        .map((x) => String.fromCharCode(x))
    classes.unshift("")
    return classes[id];
}