import web
from web import template, form
import os

render = web.template.render('templates/')

urls = (
    '/', 'home',
    '/projects', 'projects',
    '/projects/(.*)', 'project_desc',
    '/chats', 'chats',
    '/add', 'add',
    '/statc/(.*)', 'static'
)

db = web.database(
    dbn='postgres',
    host='127.0.0.1',
    port='5432',
    user='portfolio_master',
    pw='$Gjb59i',
    db='portfoliodb'
)

class static:
    def GET(self, file):
        print(file)
        with open(os.path.join('static/', file), 'rb') as f:
            return f.read()

class home:
    def GET(self):
        chats = db.select('connect')
        return render.home(chats)

class projects:
    def GET(self):
        lists = db.select('projects')
        return render.projects(lists)
          
class project_desc:
    def GET(self, project):
        project = db.select('projects', where="id=$project")
        return render.project_desc(project)
    
class chats:
    def GET(self):
        chats = db.select('connect')
        return render.chats(chats)

    def POST(self):
        i = web.input()
        n = db.insert('connect', name=i.name, email=i.email, message=i.message)
        raise web.seeother('/chats')
    
class add:
    def POST(self):
        i = web.input()
        n = db.insert('projects', project_name=i.project_name, project_description=i.project_description)
        raise web.seeother('/projects')
        

if __name__ == "__main__":
    app = web.application(urls, globals())
    app.run()