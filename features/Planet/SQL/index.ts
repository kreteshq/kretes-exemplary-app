export const browse = (id: number) => ({
  text: 'select * from planet where id = $1;',
  values: [id]
});
