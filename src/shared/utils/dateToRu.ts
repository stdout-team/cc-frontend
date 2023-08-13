export function DateToRu(date: string) {
    return new Date(date).toLocaleDateString('ru-RU', {
        year: "numeric",
        month: "long",
        day: "numeric"
    }).replace(' г.', '')
}