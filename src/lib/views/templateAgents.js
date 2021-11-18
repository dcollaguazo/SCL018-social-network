export const agents = () => {
    const divAgents =  document.createElement('div');
    const viewAgents = `
        <h3>This is the Agents page</h3>
    `
    divAgents.innerHTML = viewAgents;

    return divAgents;

}