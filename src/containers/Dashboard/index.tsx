import * as React from 'react';
import {
    connect,
    MapDispatchToPropsFunction,
    MapStateToProps,
} from 'react-redux';
import {
    Layout,
    OrderChart,
    EnchancedTable,
} from '../../components';
import {
    AppState,
    getCurrentUser,
    getUsers,
    getUserData,
    selectCurrentUser,
    selectUsers,
    selectUserData,
    logout,
    UserInterface,
} from '../../modules';

interface ReduxProps {
    users: UserInterface[];
    userData: any;
}

interface DispatchProps {
    getUsers: typeof getUsers;
    getUserData: typeof getUserData;
    logout: typeof logout;
}

interface State {
    openModal: boolean;
}

type Props = DispatchProps & ReduxProps;

class DashboardScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            openModal: false
        };
    }

    public componentDidMount() {
        this.props.getUsers();
    }

    public render() {
        const { users, userData } = this.props;
        const { openModal } = this.state;
        const usersRows = [
            { key: 'email', alignRight: false, label: 'Email' },
            { key: 'otp', alignRight: true, label: 'Authorization method' },
            { key: 'level', alignRight: true, label: 'Level' },
            { key: 'role', alignRight: true, label: 'Role' },
            { key: 'uid', alignRight: true, label: 'UID' },
        ];

        return (
            <Layout logout={this.userLogout}>
                <OrderChart />
                {users ? <EnchancedTable rows={usersRows} data={users}/> : null}
            </Layout>
        );
    }

    private userLogout = () => {
        this.props.logout();
    };
}

const mapStateToProps: MapStateToProps<ReduxProps, {}, AppState> =
    (state: AppState): ReduxProps => ({
        users: selectUsers(state),
        userData: selectUserData(state),
    });

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, {}> =
    dispatch => ({
        getUsers: () => dispatch(getUsers()),
        getUserData: payload => dispatch(getUserData(payload)),
        logout: () => dispatch(logout()),
    });

export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
