const errorHandler = (err, res) => {
     console.error("❌ Error:", err.message);
   
     res.status(err.status || 500).json({
       error: err.message || "Internal Server Error",
     });
   };
   
   export default errorHandler;