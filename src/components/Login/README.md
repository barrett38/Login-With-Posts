# Login Component

## 📌 Description

Basic Login that transitions from "Login" to "Signup."

## 🚀 Features

- Feature 1 ✅ Logs in user
- Feature 2 🔥 Signs up user
- Feature 3 🚧 Transitions easily through the 2 options

## 📖 Installation

```sh
# Clone the repository
git clone https://github.com/barrett38/Profile-Page1

# Adding it to Project >
# Adjust the code below as needed >
# APP.JS > Add imports
import Auth from "./components/Login/Auth";

# APP.JS > Place in const App >
const { state } = useContext(AuthContext);

# APP.JS > Place Route in const App >
<Route
    path="/auth"
    element={!state.token ? <Auth /> : <Navigate to="/" />}
/>
```

## 📬 Contact

- **Barrett Anderson** - [My Website](http://barrett.vercel.app)
- **Email:** barrett1614@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/barrett1614/
