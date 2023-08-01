export default function getListStudentIds(objList) {
  if (!Array.isArray(objList)) {
    return [];
  }
  return objList.map((list) => list.id);
}
