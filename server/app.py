from server.config import app
from flask import make_response, request

from server.models import db, Campaign, Campaign_characters, Characters, Items, Quests
import sys
from functools import partial

_print = partial(print, file=sys.stderr)


@app.route("/campaign", methods = ["GET", "POST"])
def campaigns():

    if request.method == "GET":

        campaigns = Campaign.query.all()

        campaigns_to_dict = [campaign.to_dict(rules = ("-reply", )) for campaign in campaigns]

        response = make_response(
            campaigns_to_dict,
            200
        )

    elif request.method == "POST":

        try:

            form_data = request.get_json()

            new_reply = Campaign(
                campaign_title = form_data["campaign_title"],
                campaign_desc = form_data["campaign_desc"]
            )

            db.session.add(new_reply)
            db.session.commit()

            response = make_response(
                new_reply.to_dict(),
                201
            )
        
        except ValueError:

            response = make_response(
                {"error" : "value error"},
                400
            )

    else:

        response = make_response(
            {"Error" : "Invalid Method"},
            400
        )

    return response


@app.route("/campaign/<int:id>", methods = ["GET", "PATCH", "DELETE"])
def campaigns_by_id(id):

    campaign = Campaign.query.filter(Campaign.id == id).first()

    if campaign:

        if request.method == "GET":

            response = make_response(
                campaign.to_dict(),
                200
            )

        if request.method == "PATCH":

            form_data = request.get_json()

            for key in form_data:
                setattr(campaign, key, form_data[key])

            db.session.commit()

            response = make_response(
                campaign.to_dict(),
                201
            )

        if request.method == "DELETE":

            db.session.delete(campaign)
            db.session.commit()

            response = make_response(
                {},
                201
            )

    else:

        response = make_response(
            {"error" : "invalid ID"},
            404
        )

    return response


@app.route("/characters", methods = ["GET", "POST"])
def characters():

    _print("starting characters")

    if request.method == "GET":

        characters: list[Characters] = Characters.query.all()
        _print(f"found characters: {characters}")

        characters_to_dict = [character.to_dict() for character in characters]

        

        response = make_response(
            characters_to_dict,
            200
        )

    elif request.method == "POST":

        try:

            form_data = request.get_json()

            new_reply = Characters(
                char_name = form_data["char_name"],
                char_desc = form_data["char_desc"]
            )

            db.session.add(new_reply)
            db.session.commit()

            response = make_response(
                new_reply.to_dict(),
                201
            )
        
        except ValueError:

            response = make_response(
                {"error" : "value error"},
                400
            )

    else:

        response = make_response(
            {"Error" : "Invalid Method"},
            400
        )

    _print(f"response: {response}")

    return response


@app.route("/characters/<int:id>", methods = ["GET", "PATCH", "DELETE"])
def characters_by_id(id):

    character = Characters.query.filter(Characters.id == id).first()

    if character:

        if request.method == "GET":

            response = make_response(
                character.to_dict(),
                200
            )

        if request.method == "PATCH":

            form_data = request.get_json()

            for key in form_data:
                setattr(character, key, form_data[key])

            db.session.commit()

            response = make_response(
                character.to_dict(),
                201
            )

        if request.method == "DELETE":

            db.session.delete(character)
            db.session.commit()

            response = make_response(
                {},
                201
            )

    else:

        response = make_response(
            {"error" : "invalid ID"},
            404
        )

    return response


@app.route("/items", methods = ["GET", "POST"])
def items():

    if request.method == "GET":

        items = Items.query.all()

        items_to_dict = [items.to_dict(rules = ("-reply", )) for items in items]

        response = make_response(
            items_to_dict,
            200
        )

    elif request.method == "POST":

        try:

            form_data = request.get_json()

            new_reply = Items(
                item_name = form_data["item_name"],
                item_desc = form_data["item_desc"]
            )

            db.session.add(new_reply)
            db.session.commit()

            response = make_response(
                new_reply.to_dict(),
                201
            )
        
        except ValueError:

            response = make_response(
                {"error" : "value error"},
                400
            )

    else:

        response = make_response(
            {"Error" : "Invalid Method"},
            400
        )

    return response


@app.route("/items/<int:id>", methods = ["GET", "PATCH", "DELETE"])
def items_by_id(id):

    item = Items.query.filter(Items.id == id).first()

    if item:

        if request.method == "GET":

            response = make_response(
                item.to_dict(),
                200
            )

        if request.method == "PATCH":

            form_data = request.get_json()

            for key in form_data:
                setattr(item, key, form_data[key])

            db.session.commit()

            response = make_response(
                item.to_dict(),
                201
            )

        if request.method == "DELETE":

            db.session.delete(item)
            db.session.commit()

            response = make_response(
                {},
                201
            )

    else:

        response = make_response(
            {"error" : "invalid ID"},
            404
        )

    return response


@app.route("/quests", methods = ["GET", "POST"])
def quests():

    if request.method == "GET":

        quests = Quests.query.all()

        quests_to_dict = [quest.to_dict(rules = ("-reply", )) for quest in quests]

        response = make_response(
            quests_to_dict,
            200
        )

    elif request.method == "POST":

        try:

            form_data = request.get_json()

            new_reply = Quests(
                quest_name = form_data["quest_name"],
                quest_desc = form_data["quest_desc"]
            )

            db.session.add(new_reply)
            db.session.commit()

            response = make_response(
                new_reply.to_dict(),
                201
            )
        
        except ValueError:

            response = make_response(
                {"error" : "value error"},
                400
            )

    else:

        response = make_response(
            {"Error" : "Invalid Method"},
            400
        )

    return response


@app.route("/quest/<int:id>", methods = ["GET", "PATCH", "DELETE"])
def quests_by_id(id):

    quest = Quests.query.filter(Quests.id == id).first()

    if quest:

        if request.method == "GET":

            response = make_response(
                quest.to_dict(),
                200
            )

        if request.method == "PATCH":

            form_data = request.get_json()

            for key in form_data:
                setattr(quest, key, form_data[key])

            db.session.commit()

            response = make_response(
                quest.to_dict(),
                201
            )

        if request.method == "DELETE":

            db.session.delete(quest)
            db.session.commit()

            response = make_response(
                {},
                201
            )

    else:

        response = make_response(
            {"error" : "invalid ID"},
            404
        )

    return response


@app.route("/campaign_characters", methods = ["GET", "POST"])
def campaign_characters():

    if request.method == "GET":

        campaign_characters = Campaign_characters.query.all()

        campaign_characters_to_dict = [campaign_character.to_dict(rules = ("-reply", )) for campaign_character in campaign_characters]

        response = make_response(
            campaign_characters_to_dict,
            200
        )

    elif request.method == "POST":

        try:

            form_data = request.get_json()

            new_reply = Campaign_characters(
                campaign_id = form_data["campaign_id"],
                char_id = form_data["char_id"]
            )

            db.session.add(new_reply)
            db.session.commit()

            response = make_response(
                new_reply.to_dict(),
                201
            )
        
        except ValueError:

            response = make_response(
                {"error" : "value error"},
                400
            )

    else:

        response = make_response(
            {"Error" : "Invalid Method"},
            400
        )

    return response


@app.route("/campaign_characters/<int:id>", methods = ["GET", "PATCH", "DELETE"])
def campaign_characters_by_id(id):

    campaign_character = Campaign_characters.query.filter(Campaign_characters.id == id).first()

    if campaign_character:

        if request.method == "GET":

            response = make_response(
                campaign_character.to_dict(),
                200
            )

        if request.method == "PATCH":

            form_data = request.get_json()

            for key in form_data:
                setattr(campaign_character, key, form_data[key])

            db.session.commit()

            response = make_response(
                campaign_character.to_dict(),
                201
            )

        if request.method == "DELETE":

            db.session.delete(campaign_character)
            db.session.commit()

            response = make_response(
                {},
                201
            )

    else:

        response = make_response(
            {"error" : "invalid ID"},
            404
        )

    return response