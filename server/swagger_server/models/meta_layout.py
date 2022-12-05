# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server.models.meta_layout_value import MetaLayoutValue  # noqa: F401,E501
from swagger_server import util


class MetaLayout(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, alias: str=None, value: MetaLayoutValue=None):  # noqa: E501
        """MetaLayout - a model defined in Swagger

        :param alias: The alias of this MetaLayout.  # noqa: E501
        :type alias: str
        :param value: The value of this MetaLayout.  # noqa: E501
        :type value: MetaLayoutValue
        """
        self.swagger_types = {
            'alias': str,
            'value': MetaLayoutValue
        }

        self.attribute_map = {
            'alias': 'alias',
            'value': 'value'
        }
        self._alias = alias
        self._value = value

    @classmethod
    def from_dict(cls, dikt) -> 'MetaLayout':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The MetaLayout of this MetaLayout.  # noqa: E501
        :rtype: MetaLayout
        """
        return util.deserialize_model(dikt, cls)

    @property
    def alias(self) -> str:
        """Gets the alias of this MetaLayout.


        :return: The alias of this MetaLayout.
        :rtype: str
        """
        return self._alias

    @alias.setter
    def alias(self, alias: str):
        """Sets the alias of this MetaLayout.


        :param alias: The alias of this MetaLayout.
        :type alias: str
        """
        if alias is None:
            raise ValueError("Invalid value for `alias`, must not be `None`")  # noqa: E501

        self._alias = alias

    @property
    def value(self) -> MetaLayoutValue:
        """Gets the value of this MetaLayout.


        :return: The value of this MetaLayout.
        :rtype: MetaLayoutValue
        """
        return self._value

    @value.setter
    def value(self, value: MetaLayoutValue):
        """Sets the value of this MetaLayout.


        :param value: The value of this MetaLayout.
        :type value: MetaLayoutValue
        """
        if value is None:
            raise ValueError("Invalid value for `value`, must not be `None`")  # noqa: E501

        self._value = value