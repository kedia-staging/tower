import * as React from 'react';
import {
    connect,
    MapDispatchToPropsFunction,
    MapStateToProps,
} from 'react-redux';
import {
    Layout,
    OrderChart,
    UserTable,
    UserModal,
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
    currentUser: UserInterface | undefined;
    users: UserInterface[];
    userData: any;
}

interface DispatchProps {
    getUsers: typeof getUsers;
    getUserData: typeof getUserData;
    getCurrentUser: typeof getCurrentUser;
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
        this.props.getCurrentUser();
    }

    public componentWillReceiveProps(next: Props) {
        if (!next.currentUser) {
            window.location.replace('/tower/login');
        }
    }

    public render() {
        const { users, userData } = this.props;
        const { openModal } = this.state;

        return (
            <Layout logout={this.userLogout}>
                <OrderChart />
                { users ? <UserTable users={users} getUserData={this.getUser}/> : null}
                { userData ? (<UserModal
                    open={openModal}
                    user={userData}
                    modalClose={this.closeModal}
                />) : null}
            </Layout>
        );
    }

    private userLogout = () => this.props.logout();

    private getUser = (uid: string) => {
        this.props.getUserData({ uid });
        this.setState({
            openModal: true,
        });
    };

    private closeModal = () => {
        this.setState({
            openModal: false,
        });
    }
}

const mapStateToProps: MapStateToProps<ReduxProps, {}, AppState> =
    (state: AppState): ReduxProps => ({
        currentUser: selectCurrentUser(state),
        users: selectUsers(state),
        userData: selectUserData(state),
    });

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, {}> =
    dispatch => ({
        getCurrentUser: () => dispatch(getCurrentUser()),
        getUsers: () => dispatch(getUsers()),
        getUserData: payload => dispatch(getUserData(payload)),
        logout: () => dispatch(logout()),
    });

export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
