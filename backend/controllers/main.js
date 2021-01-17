
function get_ics(file) {

}

exports.putDocument = async (req, res) => {
    const file = req.body.file;

    const ics_file = get_ics(file);

    res.status(200).json({
      status: "success",
      data: {
        ics: isc_file,
      },
    });
};

// Get Investor Profile
exports.getDocument = async (req, res) => {
  /*const id = req.params.id;
  const profile = await Founder.findById(id);

  res.status(200).json({
    status: "success",
    data: {
      profile,
    },
  });*/
};