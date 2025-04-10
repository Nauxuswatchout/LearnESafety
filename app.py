from flask import Flask, render_template
# import mysql.connector
# import pymysql
import os

app = Flask(__name__)


db_config = {
    'host': 'trustitdata.mysql.database.azure.com',
    'user': 'at07data',
    'password': 'trustit07data?',
    'database': 'build_trust_in_it',
    'ssl_ca': os.path.join(os.path.dirname(__file__), 'DigiCertGlobalRootG2.crt.pem'),
    'ssl_verify_cert': True
}
 
def get_db_connection():
    connection = mysql.connector.connect(**db_config)
    return connection

"""
conn = pymysql.connect(
     host="localhost",       
     user="root",        
     password="", # replace with the connection string
     database="build_trust_in_it",
     cursorclass=pymysql.cursors.DictCursor
 )
 """

@app.route('/')
def home():
    return render_template('index.html', title='Home')

@app.route('/parents')
def parents():
    return render_template('parents.html', title='For Parents')

@app.route('/children')
def children():
    return render_template('children.html', title='For Children')

@app.route('/parents/internet-guidelines')
def internet_guidelines():
    return render_template('parents/internet_guidelines.html', title='Internet Guidelines')

@app.route('/parents/learn_dangers')
def learn_dangers():
    return render_template('parents/learn_dangers.html', title='Learn the Dangers')

@app.route('/parents/questionnaire')
def questionnaire():
    return render_template('parents/questionnaire.html', title='Safety Questionnaire')

# Individual dangers pages
@app.route('/dangers/cyberbullying')
def cyberbullying():
    return render_template('dangers/cyberbullying.html', title='Cyberbullying')

@app.route('/dangers/online-predators')
def online_predators():
    return render_template('dangers/online_predators.html', title='Online Predators')

@app.route('/dangers/phishing-scams')
def phishing_scams():
    return render_template('dangers/phishing_scams.html', title='Phishing & Scams')

@app.route('/dangers/inappropriate-content')
def inappropriate_content():
    return render_template('dangers/inappropriate_content.html', title='Inappropriate Content')

@app.route('/dangers/virus-malware')
def virus_malware():
    return render_template('dangers/virus_malware.html', title='Social Media Pressure')

@app.route('/dangers/online-addiction')
def online_addiction():
    return render_template('dangers/online_addiction.html', title='Online Addiction')


@app.route('/api/scam_internet_by_location')
def scam_internet_by_location():
    with conn.cursor() as cursor:
        query = """
            SELECT 
                l.location_name,
                s.Scam_Contact_Mode,
                SUM(s.Number_of_reports) AS total_reports
            FROM scam s
            JOIN location l ON s.location_id = l.location_id
            WHERE s.Scam_Contact_Mode IN (
                'Email', 'Mobile apps', 'Internet', 'Social media/Online forums'
            )
            GROUP BY l.location_name, s.Scam_Contact_Mode
            ORDER BY l.location_name, s.Scam_Contact_Mode;
        """
        cursor.execute(query)
        results = cursor.fetchall()
        return jsonify(results)
    
@app.route('/api/activity_pie_data')
def activity_trends():
    with conn.cursor() as cursor:
        query = """
            SELECT 
            l.location_name AS state,
            a.year_range,
            ROUND(a.screen_activities, 1) AS screen_participation,
            ROUND(a.reading_pleasure, 1) AS reading_participation,
            ROUND(a.creative_activities, 1) AS creative_participation
            FROM activity a
            JOIN location l ON a.location_id = l.location_id
            ORDER BY a.year_range, a.location_id;
        """
        cursor.execute(query)
        result = cursor.fetchall()
        return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')