const bodyParser = require("body-parser");
const express = require("express");
var cors = require("cors");
const app = express();
const multer = require("multer");
const path = require("path");
const deleteAllFilesInDir = require("./utils/deleteFile");
const { db } = require("./db");
const router = require("./auth/auth.routes");
const dotenv = require("dotenv");
const authMiddleware = require("./auth/auth.middlewares");
app.use(express.json());
const port = process.env.PORT || 8080;

const con = db();
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage });
dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});

// Account
app
  .route("/account")
  .get(authMiddleware.isAuth, function (req, res) {
    let sql = "SELECT * FROM Account";
    con.query(sql, (err, response) => {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({ status: "success", data: response });
      }
    });
  })
  .post(function (req, res) {
    let sql = `INSERT INTO Account SET ?`;
    const { body } = req;
    if (!body.AccountID) {
      res
        .status(400)
        .send({ status: "error", message: "Dữ liệu đầu vào không tồn tại." });
    } else {
      con.query(sql, body, function (err) {
        if (err) {
          res.send({ status: "error", message: err });
        } else {
          res.send({ status: "success", data: body });
        }
      });
    }
  });

app
  .route("/account/:accountId")
  .get(function (req, res) {
    const { accountId } = req.params;
    let sql = "SELECT * FROM Account WHERE AccountID = ?";
    con.query(sql, accountId, (err, response) => {
      if (err) throw err;
      const data =
        response && Array.isArray(response)
          ? response.find((el) => el.AccountID == accountId)
          : null;
      if (data) {
        res.send({ status: "success", data: data });
      } else {
        res.send({ status: "error", message: "AccountID không tồn tại." });
      }
    });
  })
  .put(function (req, res) {
    let sql = `UPDATE Account 
              SET ?
              WHERE AccountID = ?`;
    const { body, params } = req;
    const { accountId } = params;
    if (!body.AccountID) {
      res
        .status(400)
        .send({ status: "error", message: "AccountID vào không tồn tại." });
    } else {
      con.query(sql, [body, accountId], function (err) {
        if (err) {
          res.send({ status: "error", message: err });
        } else {
          res.send({ status: "success", data: body });
        }
      });
    }
  })
  .delete(function (req, res) {
    const { accountId } = req.params;
    let sql = `DELETE FROM Account WHERE AccountID = ? `;
    con.query(sql, accountId, function (err) {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({ status: "success", data: accountId });
      }
    });
  });

app.post("/uploadfile", upload.single("myFile"), function (req, res, next) {
  const file = req.file;

  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
});

app.get("/getPhoto/:imageId", function (req, res) {
  const { imageId } = req.params;
  res.sendFile(__dirname + `/images/${imageId}`);
});

app.delete("/remove-all-images", async function () {
  const directory = "/images";
  await deleteAllFilesInDir(__dirname + directory);
});

app.use("/auth", router);

app.get("/profile", authMiddleware.isAuth, async (req, res) => {
  res.send(req.user);
});

// Product
app
  .route("/products")
  .get(function (req, res) {
    let sql = "SELECT * FROM products";
    con.query(sql, (err, response) => {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({ status: "success", data: response });
      }
    });
  })
  .post(function (req, res) {
    let sql = "insert into shopdunk.products set ?";
    const { body } = req;
    con.query(sql, body, function (err) {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({ status: "success", data: body });
      }
    });
  });
app
  .route("/product-images")
  .get(function (req, res) {
    let sql = "SELECT * FROM image_product";
    con.query(sql, (err, response) => {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({ status: "success", data: response });
      }
    });
  })
  .post(function (req, res) {
    let sql = "insert into shopdunk.image_product set ?";
    const { body } = req;
    con.query(sql, body, function (err) {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({ status: "success", data: body });
      }
    });
  });
app
  .route("/product-images/:id")
  .get(function (req, res) {
    const { id } = req.params;
    let sql = "SELECT * FROM image_product WHERE id = ?";
    con.query(sql, id, (err, response) => {
      if (err) throw err;
      const data =
        response && Array.isArray(response)
          ? response.find((el) => el.id == id)
          : null;
      if (data) {
        res.send(data);
      } else {
        res.send({ status: "error", message: "Id không tồn tại." });
      }
    });
  })
  .put(function (req, res) {
    let sql = "UPDATE image_product SET ? WHERE id=?";
    const { body, params } = req;
    const { id } = params;

    con.query(sql, [body, id], function (err) {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({ status: "success", data: body });
      }
    });
  })
  .delete(function (req, res) {
    const { id } = req.params;
    let sql = `DELETE FROM image_product WHERE id = ? `;
    con.query(sql, id, function (err) {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({ status: "success", data: id });
      }
    });
  });

app.route("/all-images/:product_id").get(function (req, res) {
  const { product_id } = req.params;
  let sql = "SELECT * FROM image_product WHERE product_id = ?";
  con.query(sql, product_id, (err, response) => {
    if (err) throw err;
    res.json(response);
  });
});
app
  .route("/products/:id")
  .get(function (req, res) {
    const { id } = req.params;
    let sql = "SELECT * FROM products WHERE id = ?";
    con.query(sql, id, (err, response) => {
      if (err) throw err;
      const data =
        response && Array.isArray(response)
          ? response.find((el) => el.id == id)
          : null;
      if (data) {
        res.send(data);
      } else {
        res.send({ status: "error", message: "ProductId không tồn tại." });
      }
    });
  })
  .put(function (req, res) {
    let sql = "UPDATE products SET ? WHERE id=?";
    const { body, params } = req;
    const { id } = params;

    con.query(sql, [body, id], function (err) {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({ status: "success", data: body });
      }
    });
  })
  .delete(function (req, res) {
    const { id } = req.params;
    let sql = `DELETE FROM products WHERE id = ? `;
    con.query(sql, id, function (err) {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({ status: "success", data: id });
      }
    });
  });

app
  .route("/categories")
  .get(function (req, res) {
    let sql = "SELECT * FROM categories";
    con.query(sql, (err, response) => {
      if (err) {
        res.send({ status: "error", message: err });
      } else {
        res.send({ status: "success", data: response });
      }
    });
  })
  .put()
  .post()
  .delete();
app.route("/categories/:cate_id").get(function (req, res) {
  const { cate_id } = req.params;
  let sql = "SELECT * FROM categories WHERE cate_id = ?";
  con.query(sql, cate_id, (err, response) => {
    if (err) throw err;
    const data =
      response && Array.isArray(response)
        ? response.find((el) => el.cate_id == cate_id)
        : null;
    if (data) {
      res.send(data);
    } else {
      res.send({ status: "error", message: "cate_id không tồn tại." });
    }
  });
});
app.route("/:slug").get(function (req, res) {
  const { slug } = req.params;
  let sql = "SELECT * FROM products WHERE slug = ?";
  con.query(sql, slug, (err, response) => {
    if (err) throw err;
    const data =
      response && Array.isArray(response)
        ? response.find((el) => el.slug == slug)
        : null;
    if (data) {
      res.send(data);
    } else {
      res.send({ status: "error", message: "Slug không tồn tại." });
    }
  });
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
