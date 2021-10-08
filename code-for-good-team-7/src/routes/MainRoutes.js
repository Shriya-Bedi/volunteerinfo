import React, { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

const AdminActivities = Loadable(lazy(() => import('views/admin-activities')));
const AdminVolunteersList = Loadable(lazy(() => import('views/admin-volunteers-list')));
const AdminParticipantsList = Loadable(lazy(() => import('views/admin-participants-list')));

const DashboardVolunteerDefault = Loadable(lazy(() => import('views/dashboard-volunteers/Default')));
const BeneficiaryForm = Loadable(lazy(() => import('views/BeneficiaryForm')));
const VolunteerForm = Loadable(lazy(() => import('views/volunteer-form')));

// ===========================|| MAIN ROUTING ||=========================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/admin/default',
            element: <DashboardDefault />
        },
        {
            path: '/admin/activities',
            element: <AdminActivities />
        },
        {
            path: '/admin/volunteers-list',
            element: <AdminVolunteersList />
        },
        {
            path: '/admin/participant-list',
            element: <AdminParticipantsList />
        },
        {
            path: '/dashboard-volunteers/default',
            element: <DashboardVolunteerDefault />
        },
        {
            path: '/beneficiary-form/default',
            element: <BeneficiaryForm />
        },
        {
            path: '/volunteer-form/default',
            element: <VolunteerForm />
        }
    ]
};

export default MainRoutes;
