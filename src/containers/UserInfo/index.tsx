import React from 'react';
import {
    connect,
    MapDispatchToPropsFunction,
    MapStateToProps,
} from 'react-redux';
import { RouteProps } from 'react-router';
import {
    Layout,
    UserData,
} from '../../components';
import {
    addNewLabel,
    AppState,
    changeUserState,
    deleteLabel,
    getCurrentUser,
    getUserData,
    logout,
    selectUserData,
    UserInterface,
} from '../../modules';

interface ReduxProps {
    userData: any;
}

interface DispatchProps {
    addNewLabel: typeof addNewLabel;
    changeUserState: typeof changeUserState;
    deleteLabel: typeof deleteLabel;
    getUserData: typeof getUserData;
    logout: typeof logout;
}

interface OwnProps {
    match: any;
}

interface UserInfoState {
    openModal: boolean;
    nameLabel: string;
    valueLabel: string;
    scopeLabel: string;
}

type Props = ReduxProps & DispatchProps & RouteProps & OwnProps;

class UserInfoScreen extends React.Component<Props, UserInfoState> {
    constructor(props: Props) {
        super(props);

        this.state = {
            openModal: false,
            nameLabel: '',
            valueLabel: '',
            scopeLabel: 'public',
        };
    }

    public componentDidMount() {
        this.props.getUserData({uid: this.props.match.params.uid});
    }

    public componentWillReceiveProps(next: Props) {
        if (this.props.userData !== next.userData) {
            this.props.getUserData({uid: this.props.match.params.uid});
        }
    }

    public render() {
        const {
            openModal,
            nameLabel,
            valueLabel,
            scopeLabel,
        } = this.state;

        return (
            <Layout logout={this.userLogout}>
                { this.props.userData
                    ? (<UserData
                          addNewLabel={this.addLabel}
                          changeLabelName={this.changeNameForNewLabel}
                          changeLabelScope={this.changeScopeForNewLabel}
                          changeLabelValue={this.changeValueForNewLabel}
                          changeState={this.changeState}
                          closeModal={this.handleCloseModal}
                          deleteUserLabel={this.deleteLabel}
                          newLabelName={nameLabel}
                          newLabelScope={scopeLabel}
                          newLabelValue={valueLabel}
                          openAddLabelModal={openModal}
                          openModal={this.handleOpenModal}
                          user={this.props.userData}
                        />
                    ) : 'Loading'
                }
            </Layout>
        );
    }

    private handleCloseModal = () => {
        this.setState({
            openModal: false,
        });
    };

    private handleOpenModal = () => {
        this.setState({
            openModal: true,
        });
    };

    private userLogout = () => this.props.logout();

    private deleteLabel = (uid: string, key: string, scope: string) => {
        this.props.deleteLabel({uid: uid, key: key, scope: scope});
    };

    private changeNameForNewLabel = (value: string) => {
        this.setState({
            nameLabel: value,
        });
    };

    private changeValueForNewLabel = (value: string) => {
        this.setState({
            valueLabel: value,
        });
    };

    private changeScopeForNewLabel = (value: string) => {
        this.setState({
            scopeLabel: value,
        });
    };

    private addLabel = () => {
        const { nameLabel, valueLabel, scopeLabel } = this.state;
        const { uid } = this.props.userData;

        const requestProps = {
            key: nameLabel,
            value: valueLabel,
            scope: scopeLabel,
            uid: uid,
        };

        this.props.addNewLabel(requestProps);
        this.props.getUserData({uid: this.props.match.params.uid});
        this.changeNameForNewLabel('');
        this.changeValueForNewLabel('');
    };

    private changeState = (value: string) => {
        const { uid } = this.props.userData;
        this.props.changeUserState({uid: uid, state: value});
        this.props.getUserData({uid: this.props.match.params.uid});
    };
}

const mapStateToProps: MapStateToProps<ReduxProps, {}, AppState> =
    (state: AppState): ReduxProps => ({
        userData: selectUserData(state),
    });

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, {}> =
    dispatch => ({
        addNewLabel: payload => dispatch(addNewLabel(payload)),
        changeUserState: payload => dispatch(changeUserState(payload)),
        deleteLabel: (payload) => dispatch(deleteLabel(payload)),
        getUserData: payload => dispatch(getUserData(payload)),
        logout: () => dispatch(logout()),
    });

export const UserInfo = connect(mapStateToProps, mapDispatchToProps)(UserInfoScreen);
