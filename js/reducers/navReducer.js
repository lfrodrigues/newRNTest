import { NavigationActions } from 'react-navigation';

import AppNavigator from '../AppNavigation/appNavigator';

const NavReducer = (state, action) => {
    let newState;
    console.log('in reducer', action);
//    switch (action.type) {
    switch (action.routeName) {
        // case 'goToProfile':
        //     newState = AppNavigator.router.getStateForAction(
        //         NavigationActions.navigate({ routeName: 'Profile' }),
        //         state
        //     );
        //     break;
        //  case 'goToDashboard':
        //     newState = AppNavigator.router.getStateForAction(
        //         NavigationActions.navigate({ routeName: 'Dashboard' }),
        //         state
        //     );
        //     break;
        // case 'goToRepos':
        //     newState = AppNavigator.router.getStateForAction(
        //         NavigationActions.navigate({ routeName: 'Repositories' }),
        //         state
        //     );
        //     break;
        // case 'goToNotes':
        //     newState = AppNavigator.router.getStateForAction(
        //         NavigationActions.navigate({ routeName: 'Notes' }),
        //         state
        //     );
        //     break;
        // case 'goToWebView':
        // newState = AppNavigator.router.getStateForAction(
        //     NavigationActions.navigate({ routeName: 'Web_View' }),
        //       {...state, webViewURL : action.webViewURL}
        // );
        // break;
        case 'PopupCard':
            newState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'PopupCard' }),
                state
            );
            break;
        default:
            newState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    return newState || state;
};

// // Start with two routes: The Main screen, with the Login screen on top.
// const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
// const tempNavState = AppNavigator.router.getStateForAction(firstAction);
// const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
// const initialNavState = AppNavigator.router.getStateForAction(
//   secondAction,
//   tempNavState
// );

// function nav(state = {}, action) {
//     let nextState;
//     switch (action.type) {
//     // case 'Login':
//     //   nextState = AppNavigator.router.getStateForAction(
//     //     NavigationActions.back(),
//     //     state
//     //   );
//     //   break;
//     // case 'Logout':
//     //   nextState = AppNavigator.router.getStateForAction(
//     //     NavigationActions.navigate({ routeName: 'Login' }),
//     //     state
//     //   );
//     //   break;
//         case 'PopupCard':
//             nextState = AppNavigator.router.getStateForAction(
//                 NavigationActions.navigate({ routeName: 'PopupCard' }),
//                 state
//             );
//             break;

//         default:
//             nextState = AppNavigator.router.getStateForAction(action, state);
//             break;
//     }

//     // Simply return the original `state` if `nextState` is null or undefined.
//     return nextState || state;
// }

export default NavReducer;
