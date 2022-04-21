export function deleteArrayItemByKeyValue(
  key: string,
  value: any,
  list: Array<any>,
): Array<any> {
  for (let i = 0; i < list.length; i++) {
    if (list[i][key] === value) {
      list.splice(i, 1)
      i--
    }
  }

  return list
}
