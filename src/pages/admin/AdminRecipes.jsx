import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllRecipes, deleteRecipe } from "../../services/recipeService";
import "./AdminRecipes.css";

const AdminRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      const res = await getAllRecipes();
      setRecipes(res.data);
      setError("");
    } catch (error) {
      setError("Failed to load recipes");
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this recipe?")) {
      try {
        await deleteRecipe(id);
        fetchRecipes();
      } catch (error) {
        setError("Failed to delete recipe");
        console.error("Error deleting recipe:", error);
      }
    }
  };

  return (
    <div className="admin-recipes-container">
      <div className="recipes-header">
        <h2>Manage Recipes</h2>
        <button
          className="btn-add-recipe"
          onClick={() => navigate("/admin/recipes/add")}
        >
          + Add Recipe
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <p className="loading">Loading recipes...</p>
      ) : recipes.length === 0 ? (
        <div className="no-recipes">
          <p>No recipes yet. Click "Add Recipe" to get started!</p>
        </div>
      ) : (
        <div className="recipes-table-wrapper">
          <table className="recipes-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Cooking Time</th>
                <th>Servings</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {recipes.map((r) => (
                <tr key={r._id}>
                  <td className="recipe-title">{r.title}</td>
                  <td className="recipe-desc">
                    {r.description?.substring(0, 50)}...
                  </td>
                  <td>{r.cookingTime} mins</td>
                  <td>{r.servings}</td>
                  <td className="actions">
                    <button
                      className="btn-edit"
                      onClick={() => navigate(`/admin/recipes/edit/${r._id}`)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(r._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminRecipes;
