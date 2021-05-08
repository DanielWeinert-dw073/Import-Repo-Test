#!/usr/bin/python
# -*- coding: utf-8 -*-

from server.bo.BusinessObject import BusinessObject

class NamedBusinessObject (BusinessObject):
    """ Basisklasse für alle BOs, die einen Namen haben""" 

    def __init__ (self):
        self._name = None #Name des BOs als str

    def get_name (self):
        """Auslesen des Namens"""
        return self._name

    def set_name (self, name):
        """Setzen des Namens"""
        self._name = name