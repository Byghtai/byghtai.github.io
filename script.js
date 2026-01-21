// Internationalization object
const i18n = {
    de: {
        'page-title': 'maiqo - Audit-ready by design',
        'nav-features': 'Features',
        'nav-about': 'Über uns',
        'nav-contact': 'Kontakt',
        'nav-cta': 'Demo vereinbaren',
        'hero-title-main': 'Audit-ready by design.',
        'hero-subtitle': 'Rethinking compliance with AI.',
        'hero-bullet-1': '✓ Continuous Compliance statt Audit-Stress',
        'hero-bullet-2': '✓ Intelligente Automatisierung von Dokumentation & Nachweisen',
        'hero-bullet-3': '✓ Klarheit über den tatsächlichen Compliance-Status',
        'dashboard-title': 'Compliance Status',
        'dashboard-subtitle': 'Übersicht Ihrer aktuellen Implementierung',
        'kpi-controls': 'Controls',
        'kpi-total': 'Implementiert',
        'kpi-implementation': 'Implementation',
        'kpi-coverage': 'Abdeckung',
        'kpi-evidence': 'Evidenzen',
        'kpi-documented': 'Dokumentiert',
        'kpi-pending': 'Pending',
        'kpi-reviews': 'Reviews',
        'metric-automated': 'Automatisierte Controls',
        'metric-realtime': 'Aufgaben anstehend',
        'metric-uptime': 'Frameworks',
        'flow-title': 'Einmal eingeben, überall compliant',
        'flow-subtitle': 'Ihre Daten werden automatisch auf alle relevanten Standards und Gesetze gemappt',
        'step-input-title': 'Daten eingeben',
        'step-input-desc': 'Einmalige Erfassung Ihrer Informationen, Prozesse und Maßnahmen',
        'step-ai-title': 'KI-Mapping',
        'step-ai-desc': 'Automatische Zuordnung zu allen relevanten Standards',
        'step-output-title': 'Vollständige Compliance',
        'step-output-desc': 'Alle Standards automatisch erfüllt und audit-ready',
        'more-standards': 'Weitere',
        'hero-cta-primary': 'Early access anfragen',
        'hero-cta-secondary': 'Mehr erfahren',
        'features-title': 'Eine einzige Plattform für alle Compliance-Anforderungen',
        'features-subtitle': 'Verwalten Sie mühelos mehrere Standards, Vorschriften und Gesetze mit KI-Automatisierung',
        'feature-1-title': 'Zentralisierung',
        'feature-1-desc': 'Alle regulatorischen Vorgaben zentral managen – ohne Insellösungen oder redundante Workflows.',
        'feature-2-title': 'KI Unterstützung',
        'feature-2-desc': 'KI-Funktionen eliminieren repetitive manuelle Arbeit.',
        'feature-3-title': 'Verantwortlichkeiten',
        'feature-3-desc': 'Definierte Verantwortlichkeiten und Workflows lösen Excel und E-Mail ab.',
        'feature-4-title': 'Audit-Readiness',
        'feature-4-desc': 'Up-to-date Nachweisführung und automatische Erstellung prüfungstauglicher Audit-Texte, die jederzeit reportfähig sind.',
        'feature-5-title': 'Entlastung für die Fachbereiche',
        'feature-5-desc': 'Fachbereiche liefern Nachweise, Plattform und Experten übernehmen den Rest.',
        'feature-6-title': 'Datensicherheit',
        'feature-6-desc': 'Höchste Datenschutzstandards: Hosting und KI vollständig in Deutschland.',
        'ai-features-title': 'KI-Features, die Compliance besser machen',
        'ai-features-subtitle': 'Moderne KI-Workflows, die Lücken sichtbar machen, Nachweise verstehen und Audits vorbereiten.',
        'ai-feature-1-title': 'KI-basierte Gap-Analyse & intelligente Maßnahmenableitung',
        'ai-feature-1-lead': 'Erkennen, was fehlt - und wissen, was zu tun ist.',
        'ai-feature-1-body': 'maiqo analysiert Anforderungen automatisiert und gleicht sie mit dem Umsetzungsstand ab. Compliance-Lücken werden früh sichtbar. Das Ergebnis: klare Prioritäten, konkrete Maßnahmen und ein lernendes System zur kontinuierlichen Audit-Readiness.',
        'ai-feature-2-title': 'KI-gestützte Analyse & Klassifikation von Nachweisdokumenten',
        'ai-feature-2-lead': 'Nachweise verstehen - nicht nur ablegen.',
        'ai-feature-2-body': 'Multimodale KI analysiert PDFs, Texte und Bilder, erkennt relevante Inhalte und bewertet sie. Nachweise werden passenden Anforderungen zugeordnet, inkl. Qualitätsbewertung. Ergebnis: skalierbare Evidenzbewertung ohne Dokumentenchaos.',
        'ai-feature-3-title': 'Audit-fähige Aufbereitung operativer Umsetzungstexte',
        'ai-feature-3-lead': 'Von technischer Fachsprache zu auditklarer Dokumentation.',
        'ai-feature-3-body': 'Operative Beschreibungen werden semantisch aufbereitet und in strukturierte, normkonforme Maßnahmenbeschreibungen überführt. Nachvollziehbar für Auditorinnen und Auditoren - ohne Zusatzaufwand für Fachabteilungen.',
        'ai-feature-4-title': 'KI-Auditor für simulationsbasierte Auditvorbereitung',
        'ai-feature-4-lead': 'Audits vorbereiten, bevor sie stattfinden.',
        'ai-feature-4-body': 'Der KI-Auditor simuliert echte Auditfragen, zeigt Unklarheiten und Schwachstellen und priorisiert die nächsten Schritte. Das ermöglicht proaktive Vorbereitung weit über Self-Assessments hinaus.',
        'ai-feature-5-title': 'Automatisierte Beantwortung von Compliance- & Sicherheitsfragebögen',
        'ai-feature-5-lead': 'Fragebögen beantworten - ohne jedes Mal neu anzufangen.',
        'ai-feature-5-body': 'KI generiert Antworten aus bestehenden Maßnahmen, Dokumentationen und Nachweisen. Das spart Zeit, sorgt für Konsistenz und entlastet Compliance-, Security- und Sales-Teams.',
        'ai-feature-6-title': 'Generierung auditfähiger Compliance-Dokumentation',
        'ai-feature-6-lead': 'Dokumentation, die mit der Umsetzung mitwächst.',
        'ai-feature-6-body': 'Aus Umsetzungselementen entstehen automatisch strukturierte, auditfähige Dokumente wie Richtlinien oder Verfahrensbeschreibungen - mit klaren Bezügen zu Anforderungen und Nachweisen.',
        'ai-feature-7-title': 'KI-gestütztes Mapping neuer Anforderungen',
        'ai-feature-7-lead': 'Neue Anforderungen integrieren - ohne alles neu zu bauen.',
        'ai-feature-7-body': 'Die KI erkennt Überschneidungen, Abhängigkeiten und Ähnlichkeiten und ordnet neue Anforderungen bestehenden Regelwerken und Nachweisen zu. So lassen sich neue Standards schnell und ohne Redundanzen integrieren.',
        'sovereignty-title': 'Datenschutz & Datensouveränität',
        'sovereignty-subtitle': 'Unsere Cloud-Anwendung wird komplett in Deutschland betrieben. Für KI setzen wir auf europäische Modelle - ohne Training auf Kundendaten und ohne Übertragung in die USA.',
        'sovereignty-point-1': 'Cloud-Hosting der Anwendung ausschließlich in Deutschland.',
        'sovereignty-point-2': 'KI-Modelle in Europa, ohne Training oder Speicherung Ihrer Daten.',
        'sovereignty-point-3': 'Volle Datensouveränität und DSGVO-konforme Verarbeitung.',
        'sovereignty-badge': 'Europäischer KI-Partner',
        'sovereignty-mistral': 'Mistral-Modelle in Europa - keine Nutzung von Kundendaten fürs Training.',
        'typewriter-intro': 'Wir bringen Dinge zusammen, die zusammengehören:',
        'typewriter-line1': '<strong>Compliance</strong> trifft <strong>Kybernetik</strong>.',
        'typewriter-line2': 'Manage die Compliance in deinem Unternehmen mithilfe von AI.',
        'about-title': 'Über maiqo',
        'about-desc': 'Wir sind ein innovatives Team von KI-Experten, das sich darauf spezialisiert hat, komplexe Probleme mit modernster künstlicher Intelligenz zu lösen.',
        'about-point-1': '10+ Jahre Erfahrung in KI',
        'about-point-2': '500+ erfolgreiche Projekte',
        'about-point-3': 'Fortune 500 Kunden',
        'stat-uptime': 'Verfügbarkeit',
        'stat-projects': 'Projekte',
        'stat-support': 'Support',
        'contact-title': 'Kontaktieren Sie uns',
        'contact-subtitle': 'Bereit für Compliance-Automatisierung mit maiqo? Lassen Sie uns sprechen!',
        'form-name': 'Ihr Name',
        'form-email': 'Ihre E-Mail',
        'form-message': 'Ihre Nachricht',
        'form-submit': 'Nachricht senden',
        'form-sending': 'Wird gesendet...',
        'form-sent': 'Gesendet! ✓',
        'form-error': 'Bitte füllen Sie alle Felder aus.',
        'footer-tagline': 'Rethinking compliance with AI.',
        'footer-impressum': 'Impressum',
        'footer-datenschutz': 'Datenschutzerklärung',
        'footer-copyright': '© 2026 maiqo. Alle Rechte vorbehalten.',
        'impressum-page-title': 'Impressum - maiqo',
        'impressum-title': 'Impressum',
        'impressum-subtitle': 'Angaben gemäß § 5 DDG',
        'impressum-anbieter': 'maiqo GmbH',
        'impressum-geschaeftsfuehrung': 'maiqo GmbH',
        'impressum-geschaeftsfuehrung-text': 'Vertreten durch:',
        'impressum-geschaeftsfuehrung-namen': 'Johannes Mattes<br>Alexander Luca Graf<br>Petra Schneider',
        'impressum-kontakt': 'Kontakt',
        'impressum-telefon': 'Telefon:',
        'impressum-email': 'E-Mail:',
        'impressum-registereintrag': 'Registereintrag',
        'impressum-handelsregister': 'Eintragung im Handelsregister',
        'impressum-registergericht': 'Registergericht: Amtsgericht Kiel',
        'impressum-registernummer': 'Registernummer: HRB 28924 KI',
        'impressum-umsatzsteuer-id': 'Umsatzsteuer-ID',
        'impressum-umsatzsteuer-text': 'Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:',
        'impressum-umsatzsteuer-nummer': 'Noch nicht vorhanden',
        'impressum-verantwortlich': 'Verantwortlich für den Inhalt',
        'impressum-verantwortlich-text': 'Verantwortlich nach § 18 Abs. 2 TDDDG:',
        'impressum-verantwortlich-details': 'Geschäftsführung der maiqo GmbH',
        'impressum-streitbeilegung': 'Online-Streitbeilegung',
        'impressum-streitbeilegung-text': 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:',
        'impressum-streitbeilegung-email': 'Unsere E-Mail-Adresse finden Sie oben im Impressum.',
        'impressum-verbraucherstreitbeilegung': 'Verbraucherstreitbeilegung/Universalschlichtungsstelle',
        'impressum-verbraucherstreitbeilegung-text': 'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
        'impressum-haftungsausschluss': 'Haftungsausschluss',
        'impressum-haftung-inhalte': 'Haftung für Inhalte',
        'impressum-haftung-inhalte-text1': 'Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
        'impressum-haftung-inhalte-text2': 'Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
        'impressum-haftung-links': 'Haftung für Links',
        'impressum-haftung-links-text1': 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.',
        'impressum-haftung-links-text2': 'Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
        'impressum-urheberrecht': 'Urheberrecht',
        'impressum-urheberrecht-text1': 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.',
        'impressum-urheberrecht-text2': 'Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',
        'impressum-stand': 'Stand: 14.01.2026',
        'datenschutz-page-title': 'Datenschutzerklärung - maiqo',
        'datenschutz-title': 'Datenschutzerklärung',
        'datenschutz-subtitle': 'Informationen über die Verarbeitung Ihrer personenbezogenen Daten',
        'datenschutz-ueberblick': '1. Datenschutz auf einen Blick',
        'datenschutz-allgemeine-hinweise': 'Allgemeine Hinweise',
        'datenschutz-allgemeine-hinweise-text': 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.',
        'datenschutz-datenerfassung': 'Datenerfassung auf unserer Website',
        'datenschutz-wer-verantwortlich': 'Wer ist verantwortlich für die Datenerfassung auf dieser Website?',
        'datenschutz-wer-verantwortlich-text': 'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.',
        'datenschutz-wie-erfassen': 'Wie erfassen wir Ihre Daten?',
        'datenschutz-wie-erfassen-text1': 'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.',
        'datenschutz-wie-erfassen-text2': 'Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.',
        'datenschutz-wofuer-nutzen': 'Wofür nutzen wir Ihre Daten?',
        'datenschutz-wofuer-nutzen-text': 'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.',
        'datenschutz-welche-rechte': 'Welche Rechte haben Sie bezüglich Ihrer Daten?',
        'datenschutz-welche-rechte-text': 'Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.',
        'datenschutz-hosting': '2. Hosting und Content Delivery Networks (CDN)',
        'datenschutz-externes-hosting': 'Externes Hosting',
        'datenschutz-externes-hosting-text1': 'Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.',
        'datenschutz-externes-hosting-text2': 'Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).',
        'datenschutz-pflichtinformationen': '3. Allgemeine Hinweise und Pflichtinformationen',
        'datenschutz-datenschutz': 'Datenschutz',
        'datenschutz-datenschutz-text': 'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.',
        'datenschutz-verantwortliche-stelle': 'Verantwortliche Stelle',
        'datenschutz-verantwortliche-stelle-text': 'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:',
        'datenschutz-widerruf': 'Widerruf Ihrer Einwilligung zur Datenverarbeitung',
        'datenschutz-widerruf-text': 'Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.',
        'datenschutz-widerspruchsrecht': 'Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen',
        'datenschutz-widerspruchsrecht-text': 'WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).',
        'datenschutz-beschwerderecht': 'Beschwerderecht bei der zuständigen Aufsichtsbehörde',
        'datenschutz-beschwerderecht-text': 'Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.',
        'datenschutz-datenuebertragbarkeit': 'Recht auf Datenübertragbarkeit',
        'datenschutz-datenuebertragbarkeit-text': 'Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.',
        'datenschutz-ssl': 'SSL- bzw. TLS-Verschlüsselung',
        'datenschutz-ssl-text': 'Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.',
        'datenschutz-datenerfassung-website': '4. Datenerfassung auf unserer Website',
        'datenschutz-cookies': 'Cookies',
        'datenschutz-cookies-text1': 'Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.',
        'datenschutz-cookies-text2': 'Die meisten der von uns verwendeten Cookies sind so genannte "Session-Cookies". Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.',
        'datenschutz-server-log': 'Server-Log-Dateien',
        'datenschutz-server-log-text': 'Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:',
        'datenschutz-server-log-item1': 'Browsertyp und Browserversion',
        'datenschutz-server-log-item2': 'verwendetes Betriebssystem',
        'datenschutz-server-log-item3': 'Referrer URL',
        'datenschutz-server-log-item4': 'Hostname des zugreifenden Rechners',
        'datenschutz-server-log-item5': 'Uhrzeit der Serveranfrage',
        'datenschutz-server-log-item6': 'IP-Adresse',
        'datenschutz-server-log-zusammenfuehrung': 'Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.',
        'datenschutz-kontaktformular': 'Kontaktformular',
        'datenschutz-kontaktformular-text': 'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
        'datenschutz-anfrage-email': 'Anfrage per E-Mail, Telefon oder Telefax',
        'datenschutz-anfrage-email-text': 'Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
        'datenschutz-analyse': '5. Analyse-Tools und Werbung',
        'datenschutz-google-analytics': 'Google Analytics',
        'datenschutz-google-analytics-text1': 'Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited ("Google"), Gordon House, Barrow Street, Dublin 4, Irland.',
        'datenschutz-google-analytics-text2': 'Google Analytics verwendet so genannte "Cookies". Das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.',
        'datenschutz-ip-anonymisierung': 'IP Anonymisierung',
        'datenschutz-ip-anonymisierung-text': 'Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übertragung in die USA gekürzt.',
        'datenschutz-newsletter': '6. Newsletter',
        'datenschutz-newsletter-daten': 'Newsletter­daten',
        'datenschutz-newsletter-daten-text': 'Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht bzw. nur auf freiwilliger Basis erhoben.',
        'datenschutz-auftragsverarbeitung': '7. Auftragsverarbeitung',
        'datenschutz-auftragsverarbeitung-text': 'Wir haben mit unseren Dienstleistern entsprechende Verträge zur Auftragsverarbeitung (AVV) geschlossen. Dies ist ein datenschutzrechtlich vorgeschriebener Vertrag, der gewährleistet, dass diese die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeiten.',
        'datenschutz-ihre-rechte': '8. Ihre Rechte als betroffene Person',
        'datenschutz-ihre-rechte-text': 'Unter den angegebenen Kontaktdaten können Sie jederzeit folgende Rechte ausüben:',
        'datenschutz-recht-auskunft': 'Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO)',
        'datenschutz-recht-berichtigung': 'Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO)',
        'datenschutz-recht-loeschung': 'Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)',
        'datenschutz-recht-einschraenkung': 'Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO)',
        'datenschutz-recht-widerspruch': 'Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO)',
        'datenschutz-recht-uebertragbarkeit': 'Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO)',
        'datenschutz-widerruf-einwilligung': 'Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.',
        'datenschutz-beschwerde-aufsichtsbehoerde': 'Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.',
        'datenschutz-liste-aufsichtsbehoerden': 'Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter:',
        'datenschutz-stand': 'Stand: 14.01.2026'
    },
    en: {
        'page-title': 'maiqo - Audit-ready by design',
        'nav-features': 'Features',
        'nav-about': 'About',
        'nav-contact': 'Contact',
        'nav-cta': 'Schedule Demo',
        'hero-title-main': 'Audit-ready by design.',
        'hero-subtitle': 'Rethinking compliance with AI.',
        'hero-bullet-1': '✓ Continuous compliance instead of audit stress',
        'hero-bullet-2': '✓ Intelligent automation of documentation & evidence',
        'hero-bullet-3': '✓ Clarity about the actual compliance status',
        'dashboard-title': 'Compliance Status',
        'dashboard-subtitle': 'Overview of your current implementation',
        'kpi-controls': 'Controls',
        'kpi-total': 'Implemented',
        'kpi-implementation': 'Implementation',
        'kpi-coverage': 'Coverage',
        'kpi-evidence': 'Evidence',
        'kpi-documented': 'Documented',
        'kpi-pending': 'Pending',
        'kpi-reviews': 'Reviews',
        'metric-automated': 'Automated Controls',
        'metric-realtime': 'Pending Tasks',
        'metric-uptime': 'Frameworks',
        'flow-title': 'Enter once, compliant everywhere',
        'flow-subtitle': 'Your data is automatically mapped to all relevant standards and regulations',
        'step-input-title': 'Input Data',
        'step-input-desc': 'One-time capture of your information, processes and measures',
        'step-ai-title': 'AI Mapping',
        'step-ai-desc': 'Automatic assignment to all relevant standards',
        'step-output-title': 'Complete Compliance',
        'step-output-desc': 'All standards automatically fulfilled and audit-ready',
        'more-standards': 'More',
        'hero-cta-primary': 'Request early access',
        'hero-cta-secondary': 'Learn More',
        'features-title': 'One Single Platform for All Compliance Requirements',
        'features-subtitle': 'Effortlessly manage multiple standards, regulations and laws with AI automation',
        'feature-1-title': 'Centralization',
        'feature-1-desc': 'Manage all regulatory requirements centrally – without isolated solutions or redundant workflows.',
        'feature-2-title': 'AI Support',
        'feature-2-desc': 'AI functions eliminate repetitive, manual work.',
        'feature-3-title': 'Responsibilities',
        'feature-3-desc': 'Defined responsibilities and workflows replace Excel and Email.',
        'feature-4-title': 'Audit-Readiness',
        'feature-4-desc': 'Up-to-date evidence management and automatic creation of audit-ready texts that are reportable at any time.',
        'feature-5-title': 'Relief for Specialist Departments',
        'feature-5-desc': 'Departments provide evidence, platform and experts handle the rest.',
        'feature-6-title': 'Data Security',
        'feature-6-desc': 'Highest data protection standards: Hosting and AI completely in Germany.',
        'ai-features-title': 'AI Features That Improve Compliance',
        'ai-features-subtitle': 'Modern AI workflows that surface gaps, understand evidence, and prepare audits.',
        'ai-feature-1-title': 'AI-Based Gap Analysis & Intelligent Remediation',
        'ai-feature-1-lead': 'See what is missing - and know what to do.',
        'ai-feature-1-body': 'maiqo automatically analyzes requirements and matches them to implementation status. Compliance gaps become visible early. The result: clear priorities, concrete actions, and a learning system for continuous audit readiness.',
        'ai-feature-2-title': 'AI-Assisted Analysis & Classification of Evidence Documents',
        'ai-feature-2-lead': 'Understand evidence - not just store it.',
        'ai-feature-2-body': 'Multimodal AI analyzes PDFs, text files, and images, recognizes relevant content, and evaluates it. Evidence is mapped to the right requirements, including quality assessment. Result: scalable evidence review without document chaos.',
        'ai-feature-3-title': 'Audit-Ready Preparation of Operational Implementation Texts',
        'ai-feature-3-lead': 'From technical language to audit-ready documentation.',
        'ai-feature-3-body': 'Operational descriptions are semantically prepared and turned into structured, standard-compliant control descriptions. Clear for auditors - without extra effort for domain teams.',
        'ai-feature-4-title': 'AI Auditor for Simulation-Based Audit Preparation',
        'ai-feature-4-lead': 'Prepare audits before they happen.',
        'ai-feature-4-body': 'The AI auditor simulates real audit questions, highlights ambiguities and weaknesses, and prioritizes next steps. This enables proactive preparation beyond self-assessments.',
        'ai-feature-5-title': 'Automated Answers for Compliance & Security Questionnaires',
        'ai-feature-5-lead': 'Answer questionnaires - without starting from scratch.',
        'ai-feature-5-body': 'AI generates responses from existing controls, documentation, and evidence. It saves time, ensures consistency, and reduces workload for compliance, security, and sales teams.',
        'ai-feature-6-title': 'Generation of Audit-Ready Compliance Documentation',
        'ai-feature-6-lead': 'Documentation that grows with implementation.',
        'ai-feature-6-body': 'From implementation elements, AI produces structured, audit-ready documents such as policies and procedures, with clear links to requirements and evidence.',
        'ai-feature-7-title': 'AI-Assisted Mapping of New Requirements',
        'ai-feature-7-lead': 'Integrate new requirements - without rebuilding everything.',
        'ai-feature-7-body': 'The AI detects overlaps, dependencies, and similarities and maps new requirements to existing frameworks and evidence. This lets you integrate new standards quickly and without redundancies.',
        'sovereignty-title': 'Privacy & Data Sovereignty',
        'sovereignty-subtitle': 'Our cloud application is hosted entirely in Germany. For AI, we use European models - no training on customer data and no transfers to the US.',
        'sovereignty-point-1': 'Cloud hosting of the application exclusively in Germany.',
        'sovereignty-point-2': 'European AI models with no training or storage of your data.',
        'sovereignty-point-3': 'Full data sovereignty and GDPR-compliant processing.',
        'sovereignty-badge': 'European AI Partner',
        'sovereignty-mistral': 'Mistral models in Europe - no customer data used for training.',
        'typewriter-intro': 'We bring together things that belong together:',
        'typewriter-line1': '<strong>Compliance</strong> meets <strong>Cybernetics</strong>.',
        'typewriter-line2': 'Manage compliance in your company with the help of AI.',
        'about-title': 'About maiqo',
        'about-desc': 'We are an innovative team of AI experts specialized in solving complex problems with cutting-edge artificial intelligence.',
        'about-point-1': '10+ years of AI experience',
        'about-point-2': '500+ successful projects',
        'about-point-3': 'Fortune 500 clients',
        'stat-uptime': 'Uptime',
        'stat-projects': 'Projects',
        'stat-support': 'Support',
        'contact-title': 'Contact Us',
        'contact-subtitle': 'Ready for compliance automation with maiqo? Let\'s talk!',
        'form-name': 'Your Name',
        'form-email': 'Your Email',
        'form-message': 'Your Message',
        'form-submit': 'Send Message',
        'form-sending': 'Sending...',
        'form-sent': 'Sent! ✓',
        'form-error': 'Please fill in all fields.',
        'footer-tagline': 'Rethinking compliance with AI.',
        'footer-impressum': 'Legal Notice',
        'footer-datenschutz': 'Privacy Policy',
        'footer-copyright': '© 2026 maiqo. All rights reserved.',
        'impressum-page-title': 'Legal Notice - maiqo',
        'impressum-title': 'Legal Notice',
        'impressum-subtitle': 'Information according to § 5 DDG',
        'impressum-anbieter': 'maiqo GmbH',
        'impressum-geschaeftsfuehrung': 'maiqo GmbH',
        'impressum-geschaeftsfuehrung-text': 'Represented by:',
        'impressum-geschaeftsfuehrung-namen': 'Johannes Mattes<br>Alexander Luca Graf<br>Petra Schneider',
        'impressum-kontakt': 'Contact',
        'impressum-telefon': 'Phone:',
        'impressum-email': 'Email:',
        'impressum-registereintrag': 'Commercial Register',
        'impressum-handelsregister': 'Entry in the Commercial Register',
        'impressum-registergericht': 'Registration Court: Amtsgericht Kiel',
        'impressum-registernummer': 'Registration Number: HRB 28924 KI',
        'impressum-umsatzsteuer-id': 'VAT ID',
        'impressum-umsatzsteuer-text': 'VAT identification number according to § 27 a of the VAT Act:',
        'impressum-umsatzsteuer-nummer': 'Not yet available',
        'impressum-verantwortlich': 'Responsible for Content',
        'impressum-verantwortlich-text': 'Responsible according to § 18 para. 2 TDDDG:',
        'impressum-verantwortlich-details': 'Management of maiqo GmbH',
        'impressum-streitbeilegung': 'Online Dispute Resolution',
        'impressum-streitbeilegung-text': 'The European Commission provides a platform for online dispute resolution (ODR):',
        'impressum-streitbeilegung-email': 'Our email address can be found above in the legal notice.',
        'impressum-verbraucherstreitbeilegung': 'Consumer Dispute Resolution/Universal Arbitration Board',
        'impressum-verbraucherstreitbeilegung-text': 'We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.',
        'impressum-haftungsausschluss': 'Disclaimer',
        'impressum-haftung-inhalte': 'Liability for Content',
        'impressum-haftung-inhalte-text1': 'As a service provider, we are responsible for our own content on these pages according to § 7 para. 1 DDG under general laws. However, according to §§ 8 to 10 DDG, we as a service provider are not under the obligation to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.',
        'impressum-haftung-inhalte-text2': 'Obligations to remove or block the use of information under general laws remain unaffected. However, liability in this regard is only possible from the point in time at which knowledge of a specific infringement becomes known. Upon becoming aware of corresponding legal violations, we will remove this content immediately.',
        'impressum-haftung-links': 'Liability for Links',
        'impressum-haftung-links-text1': 'Our offer contains links to external third-party websites, over whose content we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking.',
        'impressum-haftung-links-text2': 'However, permanent content control of the linked pages is not reasonable without concrete evidence of a legal violation. Upon becoming aware of legal violations, we will remove such links immediately.',
        'impressum-urheberrecht': 'Copyright',
        'impressum-urheberrecht-text1': 'The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, and any form of commercialization of such material beyond the scope of copyright law shall require the prior written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use.',
        'impressum-urheberrecht-text2': 'Insofar as the content on this site was not created by the operator, the copyrights of third parties are observed. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon becoming aware of legal violations, we will remove such content immediately.',

        'impressum-stand': 'Last updated: January 14, 2026',
        'datenschutz-page-title': 'Privacy Policy - maiqo',
        'datenschutz-title': 'Privacy Policy',
        'datenschutz-subtitle': 'Information about the processing of your personal data',
        'datenschutz-ueberblick': '1. Data Protection at a Glance',
        'datenschutz-allgemeine-hinweise': 'General Information',
        'datenschutz-allgemeine-hinweise-text': 'The following information provides a simple overview of what happens to your personal data when you visit our website. Personal data is any data with which you could be personally identified. Detailed information on data protection can be found in our privacy policy listed below this text.',
        'datenschutz-datenerfassung': 'Data Collection on Our Website',
        'datenschutz-wer-verantwortlich': 'Who is responsible for data collection on this website?',
        'datenschutz-wer-verantwortlich-text': 'Data processing on this website is carried out by the website operator. You can find their contact details in the legal notice of this website.',
        'datenschutz-wie-erfassen': 'How do we collect your data?',
        'datenschutz-wie-erfassen-text1': 'Your data is collected on the one hand by you providing it to us. This could, for example, be data that you enter in a contact form.',
        'datenschutz-wie-erfassen-text2': 'Other data is automatically collected by our IT systems when you visit the website. This is mainly technical data (e.g. internet browser, operating system or time of the page call). This data is collected automatically as soon as you enter our website.',
        'datenschutz-wofuer-nutzen': 'What do we use your data for?',
        'datenschutz-wofuer-nutzen-text': 'Part of the data is collected to ensure the error-free provision of the website. Other data may be used to analyze your user behavior.',
        'datenschutz-welche-rechte': 'What rights do you have regarding your data?',
        'datenschutz-welche-rechte-text': 'You have the right at any time to receive information free of charge about the origin, recipient and purpose of your stored personal data. You also have the right to request the correction, blocking or deletion of this data. For this purpose and for further questions on the subject of data protection, you can contact us at any time at the address given in the legal notice. Furthermore, you have the right to complain to the competent supervisory authority.',
        'datenschutz-hosting': '2. Hosting and Content Delivery Networks (CDN)',
        'datenschutz-externes-hosting': 'External Hosting',
        'datenschutz-externes-hosting-text1': 'This website is hosted by an external service provider (host). The personal data collected on this website is stored on the host\'s servers. This may include IP addresses, contact requests, meta and communication data, contract data, contact data, names, website accesses and other data generated via a website.',
        'datenschutz-externes-hosting-text2': 'The use of the host is for the purpose of contract fulfillment towards our potential and existing customers (Art. 6 para. 1 lit. b GDPR) and in the interest of secure, fast and efficient provision of our online offer by a professional provider (Art. 6 para. 1 lit. f GDPR).',
        'datenschutz-pflichtinformationen': '3. General Information and Mandatory Information',
        'datenschutz-datenschutz': 'Data Protection',
        'datenschutz-datenschutz-text': 'The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy.',
        'datenschutz-verantwortliche-stelle': 'Responsible Party',
        'datenschutz-verantwortliche-stelle-text': 'The responsible party for data processing on this website is:',
        'datenschutz-widerruf': 'Revocation of Your Consent to Data Processing',
        'datenschutz-widerruf-text': 'Many data processing operations are only possible with your express consent. You can revoke consent you have already given at any time. An informal email to us is sufficient for this purpose. The lawfulness of the data processing carried out until revocation remains unaffected by the revocation.',
        'datenschutz-widerspruchsrecht': 'Right to Object to Data Collection in Special Cases',
        'datenschutz-widerspruchsrecht-text': 'IF DATA PROCESSING IS BASED ON ART. 6 PARA. 1 LIT. E OR F GDPR, YOU HAVE THE RIGHT AT ANY TIME TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION; THIS ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS. THE RESPECTIVE LEGAL BASIS ON WHICH PROCESSING IS BASED CAN BE FOUND IN THIS PRIVACY POLICY. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING WHICH OVERRIDE YOUR INTERESTS, RIGHTS AND FREEDOMS OR THE PROCESSING SERVES THE ASSERTION, EXERCISE OR DEFENSE OF LEGAL CLAIMS (OBJECTION ACCORDING TO ART. 21 PARA. 1 GDPR).',
        'datenschutz-beschwerderecht': 'Right to Complain to the Competent Supervisory Authority',
        'datenschutz-beschwerderecht-text': 'In the event of violations of the GDPR, data subjects have the right to complain to a supervisory authority, in particular in the Member State of their habitual residence, their place of work or the place of the alleged violation. The right to complain is without prejudice to other administrative or judicial remedies.',
        'datenschutz-datenuebertragbarkeit': 'Right to Data Portability',
        'datenschutz-datenuebertragbarkeit-text': 'You have the right to have data which we process based on your consent or in fulfillment of a contract automatically delivered to yourself or to a third party in a standard, machine-readable format. If you require the direct transfer of data to another responsible party, this will only be done to the extent technically feasible.',
        'datenschutz-ssl': 'SSL or TLS Encryption',
        'datenschutz-ssl-text': 'This site uses SSL or TLS encryption for security reasons and for the protection of the transmission of confidential content, such as orders or inquiries you send to us as site operators. You can recognize an encrypted connection by the fact that the address line of the browser changes from "http://" to "https://" and by the lock symbol in your browser line.',
        'datenschutz-datenerfassung-website': '4. Data Collection on Our Website',
        'datenschutz-cookies': 'Cookies',
        'datenschutz-cookies-text1': 'The internet pages use so-called cookies. Cookies do not harm your computer and do not contain viruses. Cookies serve to make our offer more user-friendly, effective and secure. Cookies are small text files that are stored on your computer and saved by your browser.',
        'datenschutz-cookies-text2': 'Most of the cookies we use are so-called "session cookies". They are automatically deleted after your visit ends. Other cookies remain stored on your device until you delete them. These cookies enable us to recognize your browser on your next visit.',
        'datenschutz-server-log': 'Server Log Files',
        'datenschutz-server-log-text': 'The provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These are:',
        'datenschutz-server-log-item1': 'Browser type and browser version',
        'datenschutz-server-log-item2': 'Operating system used',
        'datenschutz-server-log-item3': 'Referrer URL',
        'datenschutz-server-log-item4': 'Hostname of the accessing computer',
        'datenschutz-server-log-item5': 'Time of the server request',
        'datenschutz-server-log-item6': 'IP address',
        'datenschutz-server-log-zusammenfuehrung': 'A combination of this data with other data sources is not made.',
        'datenschutz-kontaktformular': 'Contact Form',
        'datenschutz-kontaktformular-text': 'If you send us inquiries via contact form, your details from the inquiry form including the contact data you provided there will be stored with us for the purpose of processing the inquiry and in case of follow-up questions. We do not pass on this data without your consent.',
        'datenschutz-anfrage-email': 'Inquiry by Email, Phone or Fax',
        'datenschutz-anfrage-email-text': 'If you contact us by email, phone or fax, your inquiry including all resulting personal data (name, inquiry) will be stored and processed by us for the purpose of processing your request. We do not pass on this data without your consent.',
        'datenschutz-analyse': '5. Analysis Tools and Advertising',
        'datenschutz-google-analytics': 'Google Analytics',
        'datenschutz-google-analytics-text1': 'This website uses functions of the web analytics service Google Analytics. Provider is Google Ireland Limited ("Google"), Gordon House, Barrow Street, Dublin 4, Ireland.',
        'datenschutz-google-analytics-text2': 'Google Analytics uses so-called "cookies". These are text files that are stored on your computer and that enable an analysis of the use of the website by you. The information generated by the cookie about your use of this website is usually transmitted to a Google server in the USA and stored there.',
        'datenschutz-ip-anonymisierung': 'IP Anonymization',
        'datenschutz-ip-anonymisierung-text': 'We have activated the IP anonymization function on this website. This means that your IP address will be shortened by Google within member states of the European Union or in other contracting states of the Agreement on the European Economic Area before transmission to the USA.',
        'datenschutz-newsletter': '6. Newsletter',
        'datenschutz-newsletter-daten': 'Newsletter Data',
        'datenschutz-newsletter-daten-text': 'If you would like to receive the newsletter offered on the website, we require an email address from you as well as information that allows us to verify that you are the owner of the specified email address and that you agree to receive the newsletter. Further data is not or only collected on a voluntary basis.',
        'datenschutz-auftragsverarbeitung': '7. Data Processing',
        'datenschutz-auftragsverarbeitung-text': 'We have concluded corresponding contracts for commissioned processing (DPA) with our service providers. This is a contract prescribed by data protection law, which ensures that they only process the personal data of our website visitors according to our instructions and in compliance with the GDPR.',
        'datenschutz-ihre-rechte': '8. Your Rights as a Data Subject',
        'datenschutz-ihre-rechte-text': 'Under the contact details provided, you can exercise the following rights at any time:',
        'datenschutz-recht-auskunft': 'Information about your data stored with us and their processing (Art. 15 GDPR)',
        'datenschutz-recht-berichtigung': 'Correction of incorrect personal data (Art. 16 GDPR)',
        'datenschutz-recht-loeschung': 'Deletion of your data stored with us (Art. 17 GDPR)',
        'datenschutz-recht-einschraenkung': 'Restriction of data processing, provided we are not yet allowed to delete your data due to legal obligations (Art. 18 GDPR)',
        'datenschutz-recht-widerspruch': 'Objection to the processing of your data with us (Art. 21 GDPR)',
        'datenschutz-recht-uebertragbarkeit': 'Data portability, provided you have consented to data processing or have concluded a contract with us (Art. 20 GDPR)',
        'datenschutz-widerruf-einwilligung': 'If you have given us consent, you can revoke it at any time with effect for the future.',
        'datenschutz-beschwerde-aufsichtsbehoerde': 'You can at any time lodge a complaint with a supervisory authority, e.g. with the competent supervisory authority of the federal state of your residence or with the authority responsible for us as the responsible body.',
        'datenschutz-liste-aufsichtsbehoerden': 'A list of supervisory authorities (for the non-public sector) with address can be found at:',
        'datenschutz-stand': 'Last updated: January 14, 2026'
    }
};

// Language management
let currentLang = localStorage.getItem('preferred-language') || 'de';

// Typewriter Effect
class TypewriterEffect {
    constructor(element, texts, speed = 50) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.currentTextIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.isWaiting = false;
    }

    type() {
        const currentText = this.texts[this.currentTextIndex];
        
        if (!this.isDeleting && this.currentCharIndex <= currentText.length) {
            // Preserve HTML tags like <span class="ai-highlight">
            if (currentText.includes('<span class="ai-highlight">')) {
                this.element.innerHTML = currentText.substring(0, this.currentCharIndex);
            } else {
                this.element.textContent = currentText.substring(0, this.currentCharIndex);
            }
            this.currentCharIndex++;
            
            if (this.currentCharIndex > currentText.length) {
                this.element.classList.add('typing-complete');
                this.isWaiting = true;
                setTimeout(() => {
                    this.isWaiting = false;
                    this.isDeleting = true;
                    this.element.classList.remove('typing-complete');
                }, 2000);
            }
        } else if (this.isDeleting && this.currentCharIndex >= 0) {
            if (currentText.includes('<span class="ai-highlight">')) {
                this.element.innerHTML = currentText.substring(0, this.currentCharIndex);
            } else {
                this.element.textContent = currentText.substring(0, this.currentCharIndex);
            }
            this.currentCharIndex--;
            
            if (this.currentCharIndex < 0) {
                this.isDeleting = false;
                this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
                this.currentCharIndex = 0;
            }
        }

        if (!this.isWaiting) {
            setTimeout(() => this.type(), this.isDeleting ? this.speed / 2 : this.speed);
        }
    }

    start() {
        this.type();
    }
}



function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferred-language', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);
    
    // Update all elements with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (i18n[lang] && i18n[lang].hasOwnProperty(key)) {
            // Use innerHTML for elements that contain HTML tags
            if (i18n[lang][key].includes('<')) {
                element.innerHTML = i18n[lang][key];
            } else {
                element.textContent = i18n[lang][key];
            }
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (i18n[lang] && i18n[lang][key]) {
            element.setAttribute('placeholder', i18n[lang][key]);
        }
    });
    
    // Update document title
    if (i18n[lang] && i18n[lang]['page-title']) {
        document.title = i18n[lang]['page-title'];
    }
    
    // Update language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    

}

// Initialize language on page load
function initializeLanguage() {
    setLanguage(currentLang);
}

// Initialize language immediately if DOM is already ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLanguage);
} else {
    initializeLanguage();
}

// Early Particle System Initialization
function initParticleSystem() {
    const canvas = document.getElementById('particleCanvas');
    if (canvas && !canvas.particleSystemInitialized) {
        canvas.particleSystemInitialized = true;
        const particleSystem = new ParticleSystem(canvas);
        
        // Cleanup on page unload
        window.addEventListener('beforeunload', () => {
            particleSystem.destroy();
        });
        return true;
    }
    return false;
}

// Try to initialize immediately if DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initParticleSystem);
} else {
    initParticleSystem();
}

// Smooth scrolling für Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    // Language is already initialized above
    
    // KPI card animations are handled by CSS animation-delay
    
    // Initialize Particle System if not already done
    if (!initParticleSystem()) {
        // Already initialized earlier
    }
    
    // Initialize Compliance Flow with rotating standards
    initializeComplianceFlow();
    
    // Language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
    // Smooth scrolling für alle Anchor-Links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header Scroll-Effekt
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });

    // Kontakt-Formular Handling (deaktiviert für Netlify)
    // Das Formular wird jetzt von Netlify verarbeitet
    /*
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Einfache Form-Validierung
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            if (name && email && message) {
                // Simuliere Form-Submission
                const submitBtn = this.querySelector('.submit-btn');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = i18n[currentLang]['form-sending'];
                submitBtn.disabled = true;
                
                // Simuliere API-Call
                setTimeout(() => {
                    submitBtn.textContent = i18n[currentLang]['form-sent'];
                    submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                    
                    // Reset form
                    this.reset();
                    
                    setTimeout(() => {
                        submitBtn.textContent = i18n[currentLang]['form-submit'];
                        submitBtn.disabled = false;
                        submitBtn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                    }, 3000);
                }, 2000);
            } else {
                alert(i18n[currentLang]['form-error']);
            }
        });
    }
    */

    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinksContainer.classList.toggle('mobile-active');
        });
    }

    // Intersection Observer für Animationen
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Beobachte alle Feature Cards und Stats
    const animatedElements = document.querySelectorAll('.feature-card, .stat, .about-text');
    animatedElements.forEach(el => {
        observer.observe(el);
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
    });

    // CSS für Animationen hinzufügen
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Button Hover-Effekte verstärken
    const buttons = document.querySelectorAll('.primary-btn, .secondary-btn, .cta-button, .submit-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Dashboard Animation Enhancement
    const kpiCards = document.querySelectorAll('.kpi-card');
    
    kpiCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        
        // Add hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Typewriter Animation Controller
    const typewriterSection = document.querySelector('.typewriter-section');
    if (typewriterSection) {
        let animationTriggered = false;
        
        const typewriterObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animationTriggered) {
                    animationTriggered = true;
                    startTypewriterAnimation();
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        });
        
        typewriterObserver.observe(typewriterSection);
        
        function startTypewriterAnimation() {
            const typedText = document.getElementById('typed-text');
            const cursor = document.getElementById('cursor');
            const typewriterText = document.getElementById('typewriter-word');
            const explanationText = document.getElementById('explanation-text');
            
            // Reset
            typedText.textContent = '';
            cursor.classList.remove('hidden');
            typewriterText.classList.remove('maiqo-highlight');
            explanationText.classList.remove('show');
            
            // Animation sequence
            setTimeout(() => {
                typeWord('Compliance', typedText, 100, () => {
                    setTimeout(() => {
                        deleteWord(typedText, 80, () => {
                            setTimeout(() => {
                                typeWord('Kybernetik', typedText, 100, () => {
                                    setTimeout(() => {
                                        deleteWord(typedText, 80, () => {
                                            setTimeout(() => {
                                                        // Highlight maiqo before typing
        typewriterText.classList.add('maiqo-highlight');
        typeWord('maiqo', typedText, 120, () => {
                                                    cursor.classList.add('hidden');
                                                    setTimeout(() => {
                                                        explanationText.classList.add('show');
                                                    }, 500);
                                                });
                                            }, 300);
                                        });
                                    }, 1500);
                                });
                            }, 300);
                        });
                    }, 1500);
                });
            }, 1000);
        }
        
        function typeWord(word, element, speed, callback) {
            let i = 0;
            const timer = setInterval(() => {
                element.textContent += word[i];
                i++;
                if (i >= word.length) {
                    clearInterval(timer);
                    if (callback) callback();
                }
            }, speed);
        }
        
        function deleteWord(element, speed, callback) {
            const text = element.textContent;
            let i = text.length - 1;
            const timer = setInterval(() => {
                if (i >= 0) {
                    element.textContent = text.substring(0, i);
                    i--;
                } else {
                    clearInterval(timer);
                    if (callback) callback();
                }
            }, speed);
        }
        

    }

    // AI Features Slider
    document.querySelectorAll('[data-slider="ai-features"]').forEach(slider => {
        const track = slider.querySelector('.ai-features-track');
        const prevBtn = slider.querySelector('.slider-nav.prev');
        const nextBtn = slider.querySelector('.slider-nav.next');

        if (!track || !prevBtn || !nextBtn) return;

        const updateButtons = () => {
            const maxScrollLeft = track.scrollWidth - track.clientWidth - 1;
            prevBtn.disabled = track.scrollLeft <= 0;
            nextBtn.disabled = track.scrollLeft >= maxScrollLeft;
        };

        const getScrollAmount = () => {
            const card = track.querySelector('.ai-feature-card');
            if (!card) return track.clientWidth;
            const cardStyle = window.getComputedStyle(track);
            const gap = parseFloat(cardStyle.columnGap || cardStyle.gap || 0);
            return card.getBoundingClientRect().width + gap;
        };

        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        });

        track.addEventListener('scroll', updateButtons);
        window.addEventListener('resize', updateButtons);
        updateButtons();
    });

});

// Standards Rotation Data
const standards = [
    { name: 'ISO 27001', class: 'primary', dataStandard: 'iso27001' },
    { name: 'GDPR', class: 'success', dataStandard: 'gdpr' },
    { name: 'TISAX', class: 'info', dataStandard: 'tisax' },
    { name: 'NIS-2', class: 'warning', dataStandard: 'nis2' },
    { name: 'BSI C5', class: 'secondary', dataStandard: 'bsic5' },
    { name: 'DORA', class: 'accent', dataStandard: 'dora' },
    { name: 'AI Act', class: 'purple', dataStandard: 'aiact' },
    { name: 'CRA', class: 'teal', dataStandard: 'cra' }
];

let currentStandardIndex = 0;
let rotationInterval;

// Compliance Flow Animation
function initializeComplianceFlow() {
    const flowSection = document.querySelector('.compliance-flow-section');
    if (!flowSection) return;
    
    const rotatingPill = document.getElementById('rotating-pill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start standards rotation
                setTimeout(() => startStandardsRotation(), 500);
            } else {
                // Stop rotation when not visible
                stopStandardsRotation();
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(flowSection);
    
    function startStandardsRotation() {
        if (rotationInterval) return; // Already running
        
        rotationInterval = setInterval(() => {
            rotateToNextStandard();
        }, 1200); // Change every 1.2 seconds
    }
    
    function stopStandardsRotation() {
        if (rotationInterval) {
            clearInterval(rotationInterval);
            rotationInterval = null;
        }
    }
    
    function rotateToNextStandard() {
        const rotatingPill = document.getElementById('rotating-pill');
        
        if (!rotatingPill) return;
        
        // Fade out current
        rotatingPill.classList.add('fade-out');
        
        setTimeout(() => {
            // Update to next standard
            currentStandardIndex = (currentStandardIndex + 1) % standards.length;
            const nextStandard = standards[currentStandardIndex];
            
            // Update pill content and classes
            rotatingPill.className = `standard-pill ${nextStandard.class}`;
            rotatingPill.setAttribute('data-standard', nextStandard.dataStandard);
            rotatingPill.querySelector('.pill-text').textContent = nextStandard.name;
            

            
            // Fade in new
            rotatingPill.classList.remove('fade-out');
            rotatingPill.classList.add('fade-in');
            
            setTimeout(() => {
                rotatingPill.classList.remove('fade-in');
            }, 400);
        }, 200);
    }
}; 