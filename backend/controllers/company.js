const { Company } = require('../models/Company');

exports.getCompanies = async (req, res) => {
  const companies = await Company.find();
  res.status(200).send(companies);
};

exports.getCompany = async (req, res) => {
  const company = await Company.findById(req.params.id);
  res.status(200).send(company);
};

exports.createCompany = async (req, res) => {
  const company = new Company(req.body);
  await company.save();
  res.status(201).send(company);
};

exports.updateCompany = async (req, res) => {
  const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).send(company);
};

exports.deleteCompany = async (req, res) => {
  await Company.findByIdAndRemove(req.params.id);
  res.status(200).send({ message: 'Company deleted successfully' });
};
