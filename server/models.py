from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates

db = SQLAlchemy()

class Campaign(db.Model, SerializerMixin):
    __tablename__ = "campaign"

    id = db.Column(db.Integer, primary_key = True)
    campaign_title = db.Column(db.String, nullable=False)
    campaign_desc = db.Column(db.String, nullable=False)

    #relationships
    campaign_characters = db.relationship('Campaign_characters', back_populates = 'campaign', cascade = "all,delete")

    #serialzer rules
    serialize_rules = ('-campaign_characters.campaign')


class Campaign_characters(db.Model, SerializerMixin):
    __tablename__ = "campaign_characters"

    id = db.Column(db.Integer, primary_key = True)
    campaign_id = db.Column(db.Integer, db.ForeignKey("campaign.id"))
    char_id = db.Column(db.Integer, db.ForeignKey("characters.id"))

    #relationships
    campaign = db.relationship('Campaign', back_populates = 'campaign_characters')
    characters = db.relationship('Characters', back_populates = 'campaign_characters')

    #serialzer rules
    serialize_rules = ('-campaign.campaign_characters')
    serialize_rules = ('-characters.campaign_characters')


class Characters(db.Model, SerializerMixin):
    __tablename__ = "characters"

    id = db.Column(db.Integer, primary_key = True)
    item_id = db.Column(db.Integer, db.ForeignKey("items.id"))
    quest_id = db.Column(db.Integer, db.ForeignKey("quests.id"))
    char_name = db.Column(db.String, nullable=False)
    char_desc = db.Column(db.String, nullable=False)

    #relationships
    campaign_characters = db.relationship('Campaign_characters', back_populates = 'characters', cascade = "all,delete")
    items = db.relationship('Items', back_populates = 'characters', cascade = "all,delete")
    quests = db.relationship('Quests', back_populates = 'characters', cascade = "all,delete")

    #serialzer rules
    serialize_rules = ('-campaign_characters.characters', '-items.characters', '-quests.characters')


class Items(db.Model, SerializerMixin):
    __tablename__ = "items"

    id = db.Column(db.Integer, primary_key = True)
    item_name = db.Column(db.String, nullable=False)
    item_desc = db.Column(db.String, nullable=False)

    #relationships
    characters = db.relationship('Characters', back_populates = 'items')

    #serialzer rules
    serialize_rules = ('-characters.items')


class Quests(db.Model, SerializerMixin):
    __tablename__ = "quests"

    id = db.Column(db.Integer, primary_key = True)
    quest_name = db.Column(db.String, nullable=False)
    quest_desc = db.Column(db.String, nullable=False)

    #relationships
    characters = db.relationship('Characters', back_populates = 'quests')

    #serialzer rules
    serialize_rules = ('-characters.quests')