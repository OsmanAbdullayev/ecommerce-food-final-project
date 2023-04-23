import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/slice/authSlice";

const ShowOnLogIn = ({ children }) => {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	if (isLoggedIn) {
		return children;
	} else {
		return null;
	}
};

 export const ShowOnLogOut = ({ children }) => {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	if (!isLoggedIn) {
		return children;
	} else {
		return null;
	}
};


export default ShowOnLogIn;
