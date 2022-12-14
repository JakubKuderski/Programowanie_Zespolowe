# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server.models.meta_subpage import MetaSubpage  # noqa: F401,E501
from swagger_server.models.section import Section  # noqa: F401,E501
from swagger_server import util


class Subpage(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, id: int=None, meta: MetaSubpage=None, sections: List[Section]=None, value: Dict=None):  # noqa: E501
        """Subpage - a model defined in Swagger

        :param id: The id of this Subpage.  # noqa: E501
        :type id: int
        :param page: The page of this Subpage.  # noqa: E501
        :type page: int
        :param meta: The meta of this Subpage.  # noqa: E501
        :type meta: MetaSubpage
        :param sections: The sections of this Subpage.  # noqa: E501
        :type sections: List[Section]
        :param value: The value of this Subpage.  # noqa: E501
        :type value: Dict
        """
        self.swagger_types = {
            'id': int,
            'meta': MetaSubpage,
            'sections': List[Section],
            'value': Dict
        }

        self.attribute_map = {
            'id': 'id',
            'meta': 'meta',
            'sections': 'sections',
            'value': 'value'
        }
        self._id = id
        self._meta = meta
        self._sections = sections
        self._value = value

    @classmethod
    def from_dict(cls, dikt) -> 'Subpage':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The Subpage of this Subpage.  # noqa: E501
        :rtype: Subpage
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self) -> int:
        """Gets the id of this Subpage.


        :return: The id of this Subpage.
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id: int):
        """Sets the id of this Subpage.


        :param id: The id of this Subpage.
        :type id: int
        """
        if id is None:
            raise ValueError("Invalid value for `id`, must not be `None`")  # noqa: E501

        self._id = id

    @property
    def meta(self) -> MetaSubpage:
        """Gets the meta of this Subpage.


        :return: The meta of this Subpage.
        :rtype: MetaSubpage
        """
        return self._meta

    @meta.setter
    def meta(self, meta: MetaSubpage):
        """Sets the meta of this Subpage.


        :param meta: The meta of this Subpage.
        :type meta: MetaSubpage
        """
        if meta is None:
            raise ValueError("Invalid value for `meta`, must not be `None`")  # noqa: E501

        self._meta = meta

    @property
    def sections(self) -> List[Section]:
        """Gets the sections of this Subpage.


        :return: The sections of this Subpage.
        :rtype: List[Section]
        """
        return self._sections

    @sections.setter
    def sections(self, sections: List[Section]):
        """Sets the sections of this Subpage.


        :param sections: The sections of this Subpage.
        :type sections: List[Section]
        """
        if sections is None:
            raise ValueError("Invalid value for `sections`, must not be `None`")  # noqa: E501

        self._sections = sections

    @property
    def value(self) -> Dict:
        """Gets the value of this Subpage.


        :return: The value of this Subpage.
        :rtype: Dict
        """
        return self._value

    @value.setter
    def value(self, value: Dict):
        """Sets the value of this Subpage.


        :param value: The value of this Subpage.
        :type value: Dict
        """
        if value is None:
            raise ValueError("Invalid value for `value`, must not be `None`")  # noqa: E501

        self._value = value
