exports.create = async (req, res) => {
  let result = "order contorller:create";
  if (result) {
    res.status(200).json({ status: "success", data: result });
  } else {
    res.status(400).json({ status: "failed", data: "error" });
  }
};

exports.read = async (req, res) => {
  let result = "order contorller:read";
  if (result) {
    res.status(200).json({ status: "success", data: result });
  } else {
    res.status(400).json({ status: "failed", data: "error" });
  }
};

exports.delete = async (req, res) => {
  let result = "order contorller:delete";
  if (result) {
    res.status(200).json({ status: "success", data: result });
  } else {
    res.status(400).json({ status: "failed", data: "error" });
  }
};

exports.update = async (req, res) => {
  let result = "order contorller:update";
  if (result) {
    res.status(200).json({ status: "success", data: result });
  } else {
    res.status(400).json({ status: "failed", data: "error" });
  }
};
