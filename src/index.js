export default function extractAttacks({ special }) {
    return special.map(({ id, name, icon, description = 'Описание недоступно' }) => ({
      id,
      name,
      description,
      icon
    }));
  }