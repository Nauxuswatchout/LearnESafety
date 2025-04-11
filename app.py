
from flask import Flask, render_template, jsonify, request, redirect, url_for, session
import mysql.connector

# import pymysql
import os
import datetime
import time

app = Flask(__name__)
app.secret_key = 'TRUST-IT-07-secret-key'  

# Force cookies to not be permanent
app.config['SESSION_PERMANENT'] = False
# Set cookie to secure and httponly
app.config['SESSION_COOKIE_SECURE'] = True
app.config['SESSION_COOKIE_HTTPONLY'] = True
# Set very short session lifetime
app.config['PERMANENT_SESSION_LIFETIME'] = datetime.timedelta(seconds=0)

PASSWORD = "TA07"

# Database configuration
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



def login_required(route_function):
    def wrapper(*args, **kwargs):
        # Check if user is authenticated
        if 'authenticated' in session and session['authenticated']:
            return route_function(*args, **kwargs)
        else:
            # Clear any existing session data
            session.clear()
            return redirect(url_for('login'))
    wrapper.__name__ = route_function.__name__
    return wrapper


@app.route('/')
def login():
    # Force login on root access
    session.clear()
    return render_template('login.html')

@app.route('/verify', methods=['POST'])
def verify_password():
    password = request.form.get('password')
    if password == PASSWORD:
        # Create session data
        session.clear()
        session['authenticated'] = True
        session['login_time'] = time.time()
        return redirect(url_for('home'))
    else:
        return render_template('login.html', error="Incorrect password. Access denied.")

@app.route('/matrix-test')
def matrix_test():
    return render_template('matrix-test.html')

@app.route('/matrix-simple')
def matrix_simple():
    return render_template('matrix-simple.html')

@app.route('/home')
@login_required
def home():
    return render_template('index.html', title='Home')

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('login'))

@app.route('/parents')
@login_required
def parents():
    return render_template('parents.html', title='For Parents')

@app.route('/children')
@login_required
def children():
    return render_template('children.html', title='For Children')

@app.route('/parents/internet-guidelines')
@login_required
def internet_guidelines():
    return render_template('parents/internet_guidelines.html', title='Internet Guidelines')

@app.route('/parents/learn_dangers')
@login_required
def learn_dangers():
    return render_template('parents/learn_dangers.html', title='Learn the Dangers')

@app.route('/parents/questionnaire')
@login_required
def questionnaire():
    return render_template('parents/questionnaire.html', title='Safety Questionnaire')

# Individual dangers pages
@app.route('/dangers/cyberbullying')
@login_required
def cyberbullying():
    return render_template('dangers/cyberbullying.html', title='Cyberbullying')

@app.route('/dangers/online-predators')
@login_required
def online_predators():
    return render_template('dangers/online_predators.html', title='Online Predators')

@app.route('/dangers/phishing-scams')
@login_required
def phishing_scams():
    return render_template('dangers/phishing_scams.html', title='Phishing & Scams')

@app.route('/dangers/inappropriate-content')
@login_required
def inappropriate_content():
    return render_template('dangers/inappropriate_content.html', title='Inappropriate Content')

@app.route('/dangers/virus-malware')
@login_required
def virus_malware():
    return render_template('dangers/virus_malware.html', title='Social Media Pressure')

@app.route('/dangers/online-addiction')
@login_required
def online_addiction():
    return render_template('dangers/online_addiction.html', title='Online Addiction')


@app.route('/api/scam_internet_by_location')
def scam_internet_by_location():
    conn = get_db_connection()
    try:
        cursor = conn.cursor(dictionary=True)
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
        cursor.close()
        conn.close()
        return jsonify(results)
    except Exception as e:
        if conn:
            conn.close()
        return jsonify({"error": str(e)}), 500
    
@app.route('/api/activity_pie_data')
def activity_trends():
    conn = get_db_connection()
    try:
        cursor = conn.cursor(dictionary=True)
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
        cursor.close()
        conn.close()
        return jsonify(result)
    except Exception as e:
        if conn:
            conn.close()
        return jsonify({"error": str(e)}), 500

# Clear session cookies for every request
@app.before_request
def clear_session_on_root():
    if request.path == '/':
        session.clear()

if __name__ == '__main__':
    # Use HTTPS in production
    app.run(debug=False, host='0.0.0.0')
