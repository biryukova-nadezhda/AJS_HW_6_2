export default function getSpecialAttack({ special }) {
  const result = [];

  for (const elem of special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = elem;
    result.push({
      id, name, icon, description,
    });
  }

  return result;
}
