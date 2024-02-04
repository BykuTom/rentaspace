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
