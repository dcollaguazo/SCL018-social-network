export const home = () => {
    const divHome =  document.createElement('div');
    const viewHome = `
        <h1>This is the Home page</h1>
    `
    divHome.innerHTML = viewHome;

    return divHome;

}