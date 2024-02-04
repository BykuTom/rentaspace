const Property = require("../models/propertyModel");

exports.getAllProperties = async (request, response) => {
  try {
    const properties = await Property.find();

    response.status(200).json({
      status: "success",
      result: properties.length,
      requestedAt: request.requestTime,
      data: {
        properties: properties,
      },
    });
  } catch (error) {
    response.status(404).json({
      status: "fail",
      message: `Failed to fetch property data:"${error}"`,
    });
  }
};

exports.getProperty = async (request, response) => {
  try {
    const properties = await Property.findById(request.params.id);

    response.status(200).json({
      status: "success",
      data: {
        properties: properties,
      },
    });
  } catch (error) {
    response.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

exports.createProperty = async (request, response) => {
  try {
    const newProperty = await Property.create(request.body);

    response.status(201).json({
      status: "Success",
      data: {
        property: newProperty,
      },
    });
  } catch (error) {
    response.status(400).json({
      status: "fail",
      message: "Invalid data sent!",
    });
  }
};

exports.updateProperty = async (request, response) => {
  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        new: true,
      }
    );

    response.status(200).json({
      status: "Success",
      data: {
        property: updatedProperty,
        runValidators: true,
      },
    });
  } catch (error) {
    response.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.deleteProperty = async (request, response) => {
  try {
    await Property.findByIdAndDelete(request.params.id);
    response.status(204).json({ status: "success", data: null });
  } catch (error) {
    response.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
