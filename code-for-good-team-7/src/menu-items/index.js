import dashboard from './dashboard';
import dashboardAdmin from './dashboardAdmin';
import dashboardVolunteers from './dashboardVolunteers';
import beneficiaryForm from './beneficiaryForm';
import volunteerForm from './volunteerForm';

// ===========================|| MENU ITEMS ||=========================== //

const menuItems = {
    items: [dashboardAdmin, dashboardVolunteers, beneficiaryForm, volunteerForm]
};

export default menuItems;
