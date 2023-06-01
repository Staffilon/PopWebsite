import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Effettua la richiesta al backend e gestisci la risposta
      console.log('Login eseguito:', email, password);
    } catch (error) {
      console.error(error);
      // Gestisci eventuali errori durante la richiesta
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome utente</label>
          <input
            type="email"
            className="form-control"
            placeholder="Inserisci nome utente"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Accedi</button>
      </form>
    </div>
  );
}

export default Login;