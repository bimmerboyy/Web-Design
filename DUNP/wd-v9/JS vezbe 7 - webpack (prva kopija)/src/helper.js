export const printStudent = (s) =>
{
document.write(`Student ${s.firstName} ${s.lastName} ima ocene: ${s.subjects}`);
}
export const printAvgOfStudent = (st) =>
{
document.write(`Prosek: ${st.calcAvg()}`);
}

