function createData(description, hours) {
    return { description, hours };
}

//Удаляем стандартные createData() и добавляем свои по такому же принципу

const elaray = [
    createData('Add custom button', '1h'),
    createData('Add icons and main colors', '0.5h'),
    createData('Help to create writer page', '3h'),
    createData('Add navigation', '0.5h'),
    createData('Add author of the day block', '0.3h'),
];

const aplefull = [
    createData('Create WorkLog component', '2h'),
    createData('Create tables', '1.5h'),
    createData('Add checkboxes and difficulties list', '1h'),
    createData('Stylize WorkLog and writers list', '1.7h'),
    createData('Add animations on website and make elements adaptive', '1h'),
];

const dexnkt = [
    createData('Create team page', '1.5h'),
    createData('Add photos and names', '0.5h'),
    createData('Add links', '0.5h'),
    createData('Add animations', '1h'),
    createData('Find info about authors', '5h'),
];

const anastasiaKrbvsk = [
    createData('Add writers page', '1h'),
    createData('Add elements on writers page', '3h'),
    createData('Update writer page with writer info', '3h'),
    createData('Add links to youtube videos', '0.5h'),
    createData('Add styles', '2h'),
];

const riasets = [
    createData('Creating and setting up initial project', '1h'),
    createData('Gatsby setup', '0.5h'),
    createData('Contentfull setup', '0.5h'),
    createData('Code quality control', '2h'),
];

export {elaray, aplefull, dexnkt, anastasiaKrbvsk, riasets}
