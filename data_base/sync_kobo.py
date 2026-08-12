import requests
from supabase import create_client, Client

# --- SUPABASE CONFIGURATION ---
SUPABASE_URL = "https://dgmdupdzylxewgsxygtr.supabase.co/rest/v1/"
SUPABASE_SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnbWR1cGR6eWx4ZXdnc3h5Z3RyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NTM4MjMyMiwiZXhwIjoyMTAwOTU4MzIyfQ.R8osQXAoZ9Yn9-PIVMK2OP3GG1ZXBIxyaBgQ6blr61M"
supabase: Client = create_client(SUPABASE_URL, SUPABASE_SERVICE_KEY)

# --- KOBOTOOLBOX CONFIGURATION ---
KOBO_TOKEN = "71c121708534e63b66694d721daae5c7d9daf6d4"
HEADERS = {"Authorization": f"Token {KOBO_TOKEN}"}

FORM1_UID = "adsNSt5AEKGmfXrRRwTAoo"
FORM1_OPTIONALS = ["記録シート(任意)", "pH(任意)", "DO(任意)", "BOD(任意)", "COD(任意)", "SS(任意)", "コメント(任意)"]
FORM1_BASE = 5

FORM2_UID = "afjGX7j7DPiFmfTuBsZacf"
FORM2_OPTIONALS = ["水温(℃)", "濁度(NTU)", "ppm", "TSS(mg/L)", "コメント(任意)"]
FORM2_BASE = 10

def sync_form_to_supabase(asset_uid, form_name, base_points, optional_fields):
    url = f"https://kf.kobotoolbox.org/api/v2/assets/{asset_uid}/data.json"
    response = requests.get(url, headers=HEADERS)

    if response.status_code != 200:
        print(f"Failed to fetch {form_name}: {response.status_code}")
        return

    submissions = response.json().get("results", [])

    for submission in submissions:
        print(submission)
        sub_id = str(submission.get("_id"))
        user_id = submission.get("user_id")

        if not user_id:
            continue

        # Count optional questions filled
        opt_score = sum(1 for field in optional_fields if submission.get(field))
        total_score = base_points + opt_score

        # Push to Supabase (upsert prevents duplicate point allocation)
        supabase.table("point_transactions").upsert({
            "submission_id": sub_id,
            "user_id": str(user_id).strip(),
            "form_source": form_name,
            "base_points": base_points,
            "optional_points": opt_score,
            "total_earned": total_score
        }, on_conflict="submission_id").execute()

    print(f"Synced {form_name} to Supabase successfully!")

# Run sync for both forms
sync_form_to_supabase(FORM1_UID, "Form_1_Observation", FORM1_BASE, FORM1_OPTIONALS)
sync_form_to_supabase(FORM2_UID, "Form_2_AI", FORM2_BASE, FORM2_OPTIONALS)