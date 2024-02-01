from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates

db = SQLAlchemy()

class Campaign(db.Model, SerializerMixin):
    __tablename__ = "campaign"

    id = db.Column(db.Integer, primary_key = True)
    campaign_title = db.Column(db.String)
    campaign_desc = db.Column(db.String)

    #relationships

    #serialzer rules

    #validation


class Campaign_characters(db.Model, SerializerMixin):
    __tablename__ = "campaign_characters"

    campaign_id = db.Column(db.Integer, db.ForeignKey("campaign.id"))
    char_id = db.Column(db.Integer, db.ForeignKey("characters.id"))

    #relationships

    #serialzer rules

    #validation


class Characters(db.Model, SerializerMixin):
    __tablename__ = "characters"

    id = db.Column(db.Integer, primary_key = True)
    item_id = db.Column(db.Integer, db.ForeignKey("items.id"))
    quest_id = db.Column(db.Integer, db.ForeignKey("quests.id"))
    char_name = db.Column(db.String)
    char_desc = db.Column(db.String)

    #relationships

    #serialzer rules

    #validation


class Items(db.Model, SerializerMixin):
    __tablename__ = "items"

    id = db.Column(db.Integer, primary_key = True)
    item_name = db.Column(db.String)
    item_desc = db.Column(db.String)

    #relationships

    #serialzer rules

    #validation


class Quests(db.Model, SerializerMixin):
    __tablename__ = "quests"

    id = db.Column(db.Integer, primary_key = True)
    quest_name = db.Column(db.String)
    quest_desc = db.Column(db.String)

    #relationships

    #serialzer rules

    #validation