import { createSlice, type PayloadAction} from '@reduxjs/toolkit'

export interface User {
  email: string;
  password: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

const storedUser = localStorage.getItem('user');
const parsedUser: User | null = storedUser ? JSON.parse(storedUser) : null;

const initialState: AuthState = {
  isAuthenticated: !!parsedUser,
  user: parsedUser,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    handleLogin: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    handleLogout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('user');
    },
    handleRegister: (_state, action: PayloadAction<User>) => {
      localStorage.setItem(action.payload.email, JSON.stringify(action.payload));
    },
  },
});

export const { handleLogin,handleLogout,handleRegister } = authSlice.actions;
export default authSlice.reducer;