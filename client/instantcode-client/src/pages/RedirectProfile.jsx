import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function RedirectProfile() {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE}/api/users/me`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        withCredentials: true,
      })
      .then((res) => navigate(`/profile/${res.data.id}`))
      .catch(() => navigate("/login"));
  }, [navigate]);

  return null;
}
