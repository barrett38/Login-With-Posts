<!-- @RememberMe -->

# Login Component

## 📌 Description

Basic Login that transitions from "Login" to "Signup."

## 🚀 Features

- Feature 1 ✅ Logs in user
- Feature 2 🔥 Signs up user
- Feature 3 🚧 Transitions easily through the 2 options

## 📖 Installation (Change Code as needed)

```sh
# Clone the repository
git clone https://github.com/barrett38/Login-With-Posts/tree/main/src/components/Login

# APP.JS > Add imports:
import Auth from "./components/Login/Auth";

# APP.JS > Place in const App:
const { state } = useContext(AuthContext);

# APP.JS > Place Route in const App:
<Route
    path="/auth"
    element={!state.token ? <Auth /> : <Navigate to="/" />}
/>
```

## 📬 Contact

- **Barrett Anderson** - [My Website](http://barrett.vercel.app)
- **Email:** barrett1614@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/barrett1614/

## Tags to follow

- JavaScript
- React
- Login
- Authentication
- Signup
- Auth
- React-Router
- Context-API
- Frontend
- Web-Development
- User-Authentication
- SPA
- Login-Component
- Signup-Component
- @rememberme
